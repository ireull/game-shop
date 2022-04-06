import React from 'react';

import styles from './OrderCover.module.scss';
export const OrderCover = ({ game }) => {
  return (
    <div
      className={styles.cover}
      style={{ backgroundImage: `url(${game.image})` }}
    />
  );
};
