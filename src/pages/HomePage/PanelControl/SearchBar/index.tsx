import React from 'react';

import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// import styles from './SearchBar.module.css';

export const SearchBar: React.FC = () => {
  return (
    <TextField
      placeholder='Поиск'
      variant='outlined'
      size='small'
      InputProps={{
        endAdornment: (
          <InputAdornment position='start'>
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};
