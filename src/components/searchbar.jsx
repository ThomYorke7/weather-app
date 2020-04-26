import React from 'react';

const SearchBar = (props) => {
  const { unit, handleSubmit, handleUnit } = props;
  return (
    <div className='searchbar'>
      <h1>The Weather App</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type='text'
          name='city'
          id='city'
          placeholder='"London" or "London,uk"'
          required
        />
        <button type='submit' />
        <select name='unit' value={unit} onChange={(e) => handleUnit(e)}>
          <option value='metric'>°C</option>
          <option value='imperial'>°F</option>
        </select>
      </form>
    </div>
  );
};

export default SearchBar;
