import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

import { FiShoppingCart } from 'react-icons/fi';
import { CartMenu } from '../CartMenu/CartMenu';
import { calcTotalPrice } from '../../utils';

import styles from './Cart.module.scss';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const items = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    setIsCartVisible(false);
    navigate('/order');
  }, [navigate]);

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
        {isCartVisible && <CartMenu items={items} onClick={handleClick} />}
      </div>
    </div>
  );
};
