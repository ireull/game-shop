import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCurrentGame } from '../../../../store/reducers/gamesReducer';

import styles from './SearchItem.module.scss';

export const SearchItem = ({ game, setIsMenuVisible, setSearchQuery }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentGameNavigate = (game) => {
    dispatch(setCurrentGame(game));
    navigate(`/game/${game.title}`);
    setIsMenuVisible(false);
    setSearchQuery('');
  };

  return (
    <div
      key={game.id}
      className={styles.gameItem}
      onClick={() => currentGameNavigate(game)}
    >
      {game.title}
    </div>
  );
};
