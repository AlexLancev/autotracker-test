import React from 'react';

import { Notifications } from 'components/Notifications';

import styles from './PersonalAccount.module.css';

export const PersonalAccount: React.FC = () => {
  return (
    <div className={styles.personalAccount}>
      <Notifications />
      <button className={styles.personalAccountUserBtn} type='button'>
        TextName
      </button>
    </div>
  );
};
