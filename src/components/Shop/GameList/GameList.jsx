import React from 'react';

import { GameItem } from '../GameItem/GameItem';

import './GameList.scss';

export const GameList = ({ games }) => {
  const gamesFilter = games.filter((game) => game.preview !== true);

  return (
    <div className='gamelist-wrapper'>
      <div className='gamelist-title'>
        <span>Лучшее с прошлой распродажи</span>
        <div className='gamelist-arrow-nav'></div>
      </div>
      <div className='gamelist'>
        <GameItem gamesFilter={gamesFilter} />
      </div>
    </div>
  );
};
