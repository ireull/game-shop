import React, { useState } from 'react';

import './Slider.scss';

export const Slider = ({ games }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className='container-slider'>
      {games.map((game, index) => {
        return (
          <div
            className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}
            key={game.id}
          >
            <img src={game.image} alt='' />
          </div>
        );
      })}
      <div className='container-dots'>
        {Array.from({ length: 5 }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? 'dot active' : 'dot'}
          ></div>
        ))}
      </div>
    </div>
  );
};
