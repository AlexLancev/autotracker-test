import React from 'react';

import { NavLink } from 'react-router-dom';

import styles from './Menu.module.css';

export const Menu: React.FC = () => {
  return (
    <nav className={styles.nav} aria-label='Главное меню сайта'>
      <ul className={styles.navList}>
        <li className={styles.listItem}>
          <NavLink className={styles.itemLink} to={``}>
            Учетные записи
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink className={styles.itemLink} to={``}>
            Пользователи
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink className={styles.itemLink} to={``}>
            Объекты
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink className={styles.itemLink} to={``}>
            Водители
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink className={styles.itemLink} to={``}>
            Уведомления
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink className={styles.itemLink} to={``}>
            Задания
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
