import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import appStore from '../../store/app';
import './Search.scss';

const Search = () => {
  const dispatch = useDispatch();
  const locale = useSelector(appStore.selectors.getLocale);
  const search = useSelector(appStore.selectors.getSearch);
  const input = useRef(null);

  useEffect(() => {
    input.current.firstChild.focus();
  }, []);

  const change = (event) => {
    dispatch(appStore.actions.setSearch(event.target.value));
  };

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
        value={search}
        onChange={change}
      />
    </div>
  );
};

export default Search;
