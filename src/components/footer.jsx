import React from 'react';
import humidityIcon from '../icons/humidity.png';
import windIcon from '../icons/wind.png';
import sunsetIcon from '../icons/sunset.png';

const Footer = (props) => {
  const { sunrise, sunset, humidity, wind, unit } = props;
  return (
    <div className='footer'>
      <div className='footerSection'>
        <img src={humidityIcon} alt='humidity' className='footerIcon' />
        <span>{humidity}%</span>
      </div>
      <div className='footerSection'>
        <img src={windIcon} alt='wind' className='footerIcon' />
        <span>
          {wind} {unit === 'metric' ? 'm/s' : 'mph'}
        </span>
      </div>
      <div className='footerSection'>
        <img src={sunsetIcon} alt='daylight' className='footerIcon' />
        <div id='sunsetSpans'>
          <span>↑{sunrise}</span>
          <span>↓{sunset}</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
