import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteItemFromCart,
  setItemInCart,
} from '../../../store/reducers/cartReducer';
import { BlueButton } from '../../UI/BlueButton';

import styles from './GameBuy.module.scss';

export const GameBuy = ({ game }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.cartItems);
  const isItemInCart = items.some((item) => item.id === game.id);

  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(game.id));
    } else {
      dispatch(setItemInCart(game));
    }
  };

  return (
    <div className={styles.gamebuy}>
      {!isItemInCart ? (
        <BlueButton type='secondary' size='m' onClick={handleClick}>
          В корзину
        </BlueButton>
      ) : (
        <BlueButton type='primary' size='m' onClick={handleClick}>
          Добавлен
        </BlueButton>
      )}

      <span className={styles.price}>{game.price} руб.</span>
    </div>
  );
};
