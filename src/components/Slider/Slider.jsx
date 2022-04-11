import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCurrentGame } from '../../redux/reducers/gamesReducer';

import './Slider.scss';

export const Slider = ({ games }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const filterGames = games.filter((game) => game.preview !== false);

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const changeActiveSlide = (index) => {
    setActiveSlideIndex(index);
  };

  useEffect(() => {
    setActiveSlideIndex(1);
  }, []);

  const currentGameNavigate = (game) => {
    dispatch(setCurrentGame(game[activeSlideIndex - 1]));
    navigate(`/game/${game[activeSlideIndex - 1].title}`);
  };

  return (
    <div className='slider-wrapper'>
      <div className='slider'>
        {filterGames.map(({ id, image }, index, game) => {
          return (
            <div
              key={id}
              className={
                activeSlideIndex === index + 1
                  ? 'slider__slide slide__active '
                  : 'slider__slide  '
              }
              onClick={() => currentGameNavigate(game)}
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
