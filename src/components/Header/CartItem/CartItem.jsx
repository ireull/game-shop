import React from 'react';

import styles from './CartItem.module.scss';
export const CartItem = ({ title, price, id }) => {
  return (
    <div className={styles.cartItem}>
      <span>{title}</span>
      <div className={styles.price}>
        <span>{price} руб.</span>
      </div>
    </div>
  );
};
