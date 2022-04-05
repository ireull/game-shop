import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCurrentGame } from '../../../store/reducers/gamesReducer';

import styles from './GameCover.module.scss';

export const GameCover = ({ game }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentGameNavigate = (game) => {
    dispatch(setCurrentGame(game));
    navigate(`/game/${game.title}`);
  };
  return (
    <div
      className={styles.gamecover}
      style={{ backgroundImage: `url(${game.image}) ` }}
      onClick={() => currentGameNavigate(game)}
    />
  );
};
