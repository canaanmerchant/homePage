import React, { Component } from 'react';

const SearchBox = ({searchfield, searchChange}) => {
  return (
    <div>
      <input
      className='pa3 ba b--green bg-lightest-blue '
      type='search'
      placeholder='find posts'
      onChange={searchChange} />
    </div>
  );
}

export default SearchBox;
