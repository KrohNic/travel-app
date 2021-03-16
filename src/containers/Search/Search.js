import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import appStore from '../../store/app';
import './Search.scss';

const Search = () => {
  const locale = useSelector(appStore.selectors.getLocale);
  const input = useRef(null);

  useEffect(() => {
    input.current.firstChild.focus();
  }, []);

  return (
    <div className='search'>
      <div className='searchIcon'>
        <SearchIcon />
      </div>
      <InputBase
        ref={input}
        className='inputRoot inputInput'
        placeholder={locale.search}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  );
};

export default Search;
