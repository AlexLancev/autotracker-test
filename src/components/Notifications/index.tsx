import React from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';

import styles from './Notifications.module.css';

export const Notifications: React.FC = () => {
  return (
    <button
      className={styles.notificationsBtn}
      type='button'
      title='Показать / скрыть уведомления'
    >
      <NotificationsIcon
        className={styles.notificationsIcon}
        style={{
          fontSize: 30,
        }}
      />
    </button>
  );
};
