import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GameBuy } from '../../components/Shop/GameBuy/GameBuy';
import { BlueButton } from '../../components/UI/BlueButton';
import { setCurrentGame } from '../../store/reducers/gamesReducer';
import styles from './GamesPage.module.scss';

export const GamesPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const games = useSelector((state) => state.games.allGames);
  const currentGameNavigate = (game) => {
    dispatch(setCurrentGame(game));
    navigate(`/game/${game.title}`);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.allGames}>
        <span>Все доступные игры</span>
        <div className={styles.gamesList}>
          {games.map((game) => (
            <div key={game.id} className={styles.gamesitem}>
              <div
                className={styles.image}
                onClick={() => currentGameNavigate(game)}
              >
                <img src={game.image} alt='img' />
              </div>
              <div className={styles.description}>
                <div>{game.title}</div>
                <div>{game.price} руб.</div>
                <GameBuy game={game} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
