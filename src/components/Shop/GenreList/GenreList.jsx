import React from 'react';
import { GameGenre } from '../GameGenre/GameGenre';

export const GenreList = ({ genres }) => {
  return (
    <>
      {genres.map((genre) => (
        <GameGenre genre={genre} key={genre} />
      ))}
    </>
  );
};
