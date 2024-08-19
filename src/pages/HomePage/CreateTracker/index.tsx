import React from 'react';

import { FormComponent } from './FormComponent';

import styles from './CreateTracker.module.css';

export const CreateTracker: React.FC = () => {
  return (
    <div className={styles.createTracker}>
      <FormComponent />
    </div>
  );
};
