import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { FiShoppingCart } from 'react-icons/fi';
import { CartMenu } from '../CartMenu/CartMenu';
import { calcTotalPrice } from '../../utils';

import styles from './Cart.module.scss';

export const Cart = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const items = useSelector((state) => state.cart.cartItems);
  return (
    <div
      className={styles.cart}
      onClick={() => setIsCartVisible(!isCartVisible)}
    >
      <div className={styles.cartIcon}>
        <FiShoppingCart />
      </div>
      <div className={styles.totalPrice}>
        <span>{`${calcTotalPrice(items)} руб.`}</span>
        {isCartVisible && <CartMenu items={items} onClick={() => null} />}
      </div>
    </div>
  );
};
