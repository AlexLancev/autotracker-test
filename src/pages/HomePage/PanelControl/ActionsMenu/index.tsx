import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import styles from './ActionsMenu.module.css';

export const ActionsMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.actionsMenu}>
      <Button
        variant='contained'
        color='success'
        endIcon={<ArrowDropDownIcon />}
        onClick={handleClick}
      >
        Действия
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        keepMounted
      >
        <MenuItem onClick={handleClose}>Редактировать</MenuItem>
        <MenuItem onClick={handleClose}>Удалить</MenuItem>
        <MenuItem onClick={handleClose}>Копировать</MenuItem>
        <MenuItem onClick={handleClose}>Экспортировать</MenuItem>
        <MenuItem onClick={handleClose}>Архивировать</MenuItem>
        <MenuItem onClick={handleClose}>Назначить категорию</MenuItem>
        <MenuItem onClick={handleClose}>Поделиться</MenuItem>
        <MenuItem onClick={handleClose}>Просмотреть детали</MenuItem>
        <MenuItem onClick={handleClose}>Скачать</MenuItem>
        <MenuItem onClick={handleClose}>Восстановить</MenuItem>
      </Menu>
    </div>
  );
};
