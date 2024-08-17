import React from 'react';

import { SearchBar } from './SearchBar';
import { CustomToolbar } from './CustomToolbar';
import { ActionsMenu } from './ActionsMenu';

// import styles from './PanelControl.module.css';

export const PanelControl: React.FC = () => {
  return (
    <>
      <SearchBar />
      <CustomToolbar />
      <ActionsMenu />
    </>
  );
};
