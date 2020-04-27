import React from 'react';
import SearchBar from './components/searchbar';
import Main from './components/main';
import Footer from './components/footer';
import imgs from './imgsArray';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: '',
      sunrise: '',
      sunset: '',
      description: '',
      temp: '',
      feelsLike: '',
      tempMax: '',
      tempMin: '',
      humidity: '',
      wind: '',
      icon: '',
      error: '',
      unit: 'metric',
      type: '',
    };
  }

  fetchData = (location, unit) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=d63ce19c93477cd82ff15eed5d754f42&units=${unit}`
    )
      .then((response) => response.json())
      .then((data) => {
        let sunrise = new Date(data.sys.sunrise * 1000)
          .toTimeString()
          .slice(0, 5);
        let sunset = new Date(data.sys.sunset * 1000)
          .toTimeString()
          .slice(0, 5);
        let mainInfo = data.main;
        this.setState({
          sunset: sunset,
          sunrise: sunrise,
          description: data.weather[0].description,
          temp: mainInfo.temp,
          feelsLike: mainInfo.feels_like,
          tempMax: mainInfo.temp_max,
          tempMin: mainInfo.temp_min,
          humidity: mainInfo.humidity,
          wind: data.wind.speed,
          icon: data.weather[0].icon,
          error: '',
          type: data.weather[0].main,
        });
      })
      .catch((error) => this.setState({ error: error.message }));
  };

  handleUnit = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => {
      if (this.state.city !== '') {
        this.fetchData(this.state.city, this.state.unit);
      }
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ city: e.target[0].value }, () => {
      this.fetchData(this.state.city, this.state.unit);
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.type !== this.state.type) {
      let backgroundImg = imgs.filter((img) => img.type === this.state.type);
      document.body.style.backgroundImage = `url(${backgroundImg[0].src})`;
    }
  }

  render() {
    return (
      <div>
        <SearchBar
          city={this.state.city}
          unit={this.state.unit}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleUnit={this.handleUnit}
        />
        {this.state.temp !== '' && (
          <Main
            city={this.state.city}
            error={this.state.error}
            temp={this.state.temp}
            tempMax={this.state.tempMax}
            tempMin={this.state.tempMin}
            description={this.state.description}
            feelsLike={this.state.feelsLike}
            icon={this.state.icon}
          />
        )}
        {this.state.wind !== '' && (
          <Footer
            sunrise={this.state.sunrise}
            sunset={this.state.sunset}
            humidity={this.state.humidity}
            wind={this.state.wind}
            unit={this.state.unit}
          />
        )}
      </div>
    );
  }
}

export default App;
