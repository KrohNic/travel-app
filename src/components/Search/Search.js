import React from 'react';
import { useSelector } from 'react-redux';
import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import appStore from '../../store/app';
import './Search.scss';

const Search = () => {
  const locale = useSelector(appStore.selectors.getLocale);

  return (
    <div className='search'>
      <div className='searchIcon'>
        <SearchIcon />
      </div>
      <InputBase
        className='inputRoot inputInput'
        placeholder={locale.search}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  );
};

export default Search;
