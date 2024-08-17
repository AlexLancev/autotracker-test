import React from 'react';

import { Form } from 'components/Form';

import styles from './AuthorizationPage.module.css';

export const AuthorizationPage: React.FC = () => {
  return (
    <section className={styles.authorizationPage}>
      <Form />
    </section>
  );
};
