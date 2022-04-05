import React from 'react';

import styles from './GameGenre.module.scss';

export const GameGenre = ({ genre }) => {
  return <span className={styles.genre}>{genre}</span>;
};
