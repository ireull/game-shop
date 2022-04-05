import React from 'react';

import styles from './GameImg.module.scss';

export const GameImg = ({ game }) => {
  return (
    <div
      className={styles.img}
      style={{ backgroundImage: `url(${game.image})` }}
    />
  );
};
