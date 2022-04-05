import React from 'react';
import { useSelector } from 'react-redux';
import { GameBuy } from '../../components/Shop/GameBuy/GameBuy';
import { GameGenre } from '../../components/Shop/GameGenre/GameGenre';
import { GameImg } from '../../components/Shop/GameImg/GameImg';

import styles from './GamePage.module.scss';

export const GamePage = () => {
  const game = useSelector((state) => state.games.currentGame);

  if (!game) return null;

  return (
    <div>
      <h1>{game.title}</h1>
      <div className={styles.content}>
        <div className={styles.left}>
          <iframe
            width='90%'
            height='400px'
            src={game.video}
            title='Youtube video player'
            frameBorder='none'
          ></iframe>
        </div>
        <div className={styles.right}>
          <GameImg game={game} />
          <p>{game.description}</p>
          <p>Популярные метки этой игры:</p>
          {game.genres.map((genre) => (
            <GameGenre genre={genre} key={genre} />
          ))}
          <div className={styles.gameBuy}>
            <GameBuy game={game} size='l' />
            <span className={styles.gamePrice}>{game.price} руб.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
