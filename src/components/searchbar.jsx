import React from 'react';

const SearchBar = (props) => {
  const { city, handleSubmit, handleChange } = props;
  return (
    <div className='searchbar'>
      <h1>The Weather App</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type='text'
          name='city'
          id='city'
          value={city}
          onChange={(e) => handleChange(e)}
          placeholder='"London" or "London,uk"'
          required
        />
        <button type='submit'>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
