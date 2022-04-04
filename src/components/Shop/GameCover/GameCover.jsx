import React from 'react';

import styles from './GameCover.module.scss'

export const GameCover = ({ game }) => {
  return (
    <div
      className={styles.gamecover}
      style={{ backgroundImage: `url(${game.image}) ` }}
    />
  );
};
