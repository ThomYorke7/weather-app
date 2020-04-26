import React from 'react';

const Main = (props) => {
  const {
    city,
    error,
    temp,
    tempMax,
    tempMin,
    description,
    feelsLike,
    icon,
  } = props;
  const iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  return (
    <div className='main'>
      <h1 id='header'>{error !== '' ? 'Something went wrong...' : city}</h1>
      <img src={iconURL} alt='weather-icon' id='icon' />
      <p id='temp'>{temp}°</p>
      <p id='tempMax'>Max: {tempMax}°</p>
      <p id='tempMin'>Min: {tempMin}°</p>
      <p id='description'>{description}</p>
      <p id='feelsLike'>Feels Like: {feelsLike}°</p>
    </div>
  );
};

export default Main;
