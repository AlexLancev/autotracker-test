import React from 'react';

import { NavLink } from 'react-router-dom';

import { Paths } from '../../paths';

import styles from './Menu.module.css';

export const Menu: React.FC = () => {
  return (
    <nav className={styles.nav} aria-label='Главное меню сайта'>
      <ul className={styles.navList}>
        <li className={styles.listItem}>
          <NavLink className={styles.itemLink} to={`${Paths.accountPage}`}>
            Учетные записи
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink className={styles.itemLink} to={`${Paths.usersPage}`}>
            Пользователи
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink className={styles.itemLink} to={`${Paths.objectsPage}`}>
            Объекты
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink className={styles.itemLink} to={`${Paths.driversPage}`}>
            Водители
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink
            className={styles.itemLink}
            to={`${Paths.notificationsPage}`}
          >
            Уведомления
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink className={styles.itemLink} to={`${Paths.assignmentsPage}`}>
            Задания
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
