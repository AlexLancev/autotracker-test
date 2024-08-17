import React from 'react';

import { Menu } from 'components/Menu';
import { PersonalAccount } from 'components/PersonalAccount';

import styles from './AppBar.module.css';

export const AppBar: React.FC = () => {
  return (
    <div className={styles.appBar}>
      <Menu />
      <PersonalAccount />
    </div>
  );
};
