import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InputAdornment, TextField } from '@material-ui/core';
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
    console.log(event.target.value);

    dispatch(appStore.actions.setSearch(event.target.value));
  };

  return (
    <TextField
      className='search'
      ref={input}
      placeholder={locale.search}
      value={search}
      onChange={change}
      type='search'
      variant='outlined'
      margin='none'
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <SearchIcon className='search--search_btn' />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Search;
