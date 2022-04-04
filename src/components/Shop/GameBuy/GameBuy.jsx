import React from 'react';
import { BlueButton } from '../../UI/BlueButton';

import styles from './GameBuy.module.scss';

export const GameBuy = ({ game }) => {
  return (
    <div className={styles.gamebuy}>
      <BlueButton title='Добавить в корзину' />
      <span className={styles.price}>{game.price} руб.</span>
    </div>
  );
};
