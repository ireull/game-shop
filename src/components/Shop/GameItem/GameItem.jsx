import React from 'react';

import { GameBuy } from '../GameBuy/GameBuy';
import { GameCover } from '../GameCover/GameCover';

import styles from './GameItem.module.scss';

export const GameItem = ({ gamesFilter }) => {
  return (
    <>
      {gamesFilter.map((game) => (
        <div className={styles.gameItem} key={game.id}>
          <GameCover game={game} />
          <div className={styles.details}>
            <span>{game.title}</span>
          </div>
          <div className={styles.gameBuy}>
            <GameBuy game={game} />
            <span className={styles.gamePrice}>{game.price} руб.</span>
          </div>
        </div>
      ))}
    </>
  );
};
