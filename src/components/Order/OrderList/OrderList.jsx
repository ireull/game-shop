import React from 'react';
import { OrderItem } from '../OrderItem/OrderItem';

export const OrderList = ({ items }) => {
  return (
    <>
      {items.map((game) => (
        <OrderItem key={game.id} game={game} />
      ))}
    </>
  );
};
