import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { GameList } from '../../components/Shop/GameList/GameList';
import { Slider } from '../../components/Slider/Slider';

export const HomePage = () => {
  const GAMES = useSelector((state) => state.games.allGames);
  const [games, setGames] = useState([]);

  useEffect(() => {
    setGames(GAMES);
  }, []);

  return (
    <div>
      <Slider games={games} />
      <GameList games={games} />
    </div>
  );
};
