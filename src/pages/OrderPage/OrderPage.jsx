import React from 'react';
import { useSelector } from 'react-redux';
import { OrderList } from '../../components/Order/OrderList/OrderList';
import { calcTotalPrice } from '../../components/utils';

import styles from './OrderPage.module.scss';

export const OrderPage = () => {
  const items = useSelector((state) => state.cart.cartItems);
  if (items.length < 1) {
    return <h1 className={styles.emptyCart}>Ваша корзина пуста :C</h1>;
  }
  return (
    <div className={styles.orderPage}>
      <div className={styles.orderItem}>
        <OrderList items={items} />
      </div>
      <div className={styles.right}></div>
    </div>
  );
};
