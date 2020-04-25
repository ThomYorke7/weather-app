import React from 'react';

const Main = (props) => {
  const { temp, tempMax, tempMin, description, feelsLike, icon } = props;
  const iconURL = `http://openweathermap.org/img/wn/${icon}.png`;
  return (
    <div className='main'>
      <img src={iconURL} alt='weather-icon' id='icon' />
      <p id='temp'>{temp}°</p>
      <p id='tempMax'>Max: {tempMax}°</p>
      <p id='tempMin'>Min: {tempMin}°</p>
      <p id='description'>{description.toUpperCase()}</p>
      <p id='feelsLike'>Feels Like: {feelsLike}°</p>
    </div>
  );
};

export default Main;
