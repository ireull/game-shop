import React from 'react';

import styles from './BlueButton.module.scss';
export const BlueButton = ({ title, onClick }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {title}
    </button>
  );
};
