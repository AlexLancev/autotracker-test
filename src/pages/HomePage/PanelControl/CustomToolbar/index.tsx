import React from 'react';
import { Toolbar, Button, IconButton } from '@mui/material';
import ViewListIcon from '@mui/icons-material/ViewList';
import SortIcon from '@mui/icons-material/Sort';
import DownloadIcon from '@mui/icons-material/Download';

export const CustomToolbar: React.FC = () => {
  return (
    <Toolbar style={{ padding: 0 }}>
      <Button variant='contained' color='success' style={{ marginRight: 8 }}>
        Объекты
      </Button>
      <Button variant='outlined' style={{ marginRight: 8 }}>
        Группы
      </Button>
      <IconButton color='default'>
        <ViewListIcon />
      </IconButton>
      <IconButton color='default'>
        <SortIcon />
      </IconButton>
      <IconButton color='default'>
        <DownloadIcon />
      </IconButton>
    </Toolbar>
  );
};
