import React from 'react';
import { BlueButton } from '../../UI/BlueButton';
import { calcTotalPrice } from '../../utils';
import { CartList } from '../CartList/CartList';

import styles from './CartMenu.module.scss';

export const CartMenu = ({ items, onClick }) => {
  return (
    <div className={styles.cartMenu}>
      <div className={styles.gameList}>
        <CartList items={items} />
      </div>
      {items.length > 0 ? (
        <div className={styles.arrange}>
          <div className={styles.totalPrice}>
            <span>Итого: </span>
            <span>{calcTotalPrice(items)} руб.</span>
          </div>
          <BlueButton type='secondary' size='order' onClick={onClick}>
            Оформить заказ
          </BlueButton>
        </div>
      ) : null}
    </div>
  );
};
