import React from 'react';
import SearchBar from './components/searchbar';
import Main from './components/main';
import Footer from './components/footer';

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
    };
  }

  fetchData = (location) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=d63ce19c93477cd82ff15eed5d754f42&units=metric`
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
        });
        console.log(data);
        console.log(this.state);
      })
      .catch((error) => this.setState({ error: error.message }));
  };

  handleChange = (e) => {
    this.setState({ city: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.fetchData(this.state.city);
  };

  render() {
    return (
      <div>
        <SearchBar
          city={this.state.city}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <h1 className='header'>
          {this.state.error === ''
            ? this.state.city
            : 'Something went wrong...'}
        </h1>
        {this.state.temp !== '' && (
          <Main
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
          />
        )}
      </div>
    );
  }
}

export default App;
