import React, { useEffect, useState } from 'react';

import './Slider.scss';

export const Slider = ({ games }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const filterGames = games.filter((game) => game.preview !== false);

  const changeActiveSlide = (index) => {
    setActiveSlideIndex(index);
  };

  useEffect(() => {
    setActiveSlideIndex(1);
  }, []);

  return (
    <div className='slider-wrapper'>
      <div className='slider'>
        {filterGames.map(({ id, image }, index) => {
          return (
            <div
              key={id}
              className={
                activeSlideIndex === index + 1
                  ? 'slider__slide slide-active '
                  : 'slider__slide '
              }
            >
              <img src={image} alt='img' className='slider__active-image' />
            </div>
          );
        })}
      </div>
      <div className='navigate'>
        {filterGames.map(({ id, image, title }, index) => (
          <div
            className='navigate__navblock'
            key={id}
            onClick={() => changeActiveSlide(index + 1)}
          >
            <div
              className={
                activeSlideIndex === index + 1
                  ? 'navigate__sidenav navblock-active'
                  : 'navigate__navblock navigate__sidenav'
              }
            >
              <img src={image} alt='img' />
              <span>{title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
