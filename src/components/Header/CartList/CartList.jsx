import React from 'react';
import { CartItem } from '../CartItem/CartItem';

export const CartList = ({ items }) => {
  return (
    <>
      {items.length
        ? items.map((game) => (
            <CartItem
              key={game.id}
              price={game.price}
              id={game.id}
              title={game.title}
            />
          ))
        : 'В корзине пусто'}
    </>
  );
};
