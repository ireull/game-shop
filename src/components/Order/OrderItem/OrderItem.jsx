import React from 'react';
import { OrderCover } from '../OrderCover/OrderCover';
import { MdDeleteOutline } from 'react-icons/md';
import styles from './OrderItem.module.scss';
import { useDispatch } from 'react-redux';
import { deleteItemFromCart } from '../../../redux/reducers/cartReducer';

export const OrderItem = ({ game }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteItemFromCart(game.id));
  };
  return (
    <div className={styles.orderItem}>
      <div className={styles.cover}>
        <OrderCover game={game} />
      </div>
      <div className={styles.title}>{game.title}</div>
      <div className={styles.price}>
        <span>{game.price} руб.</span>
        <MdDeleteOutline className={styles.deleteIcon} onClick={handleClick} />
      </div>
    </div>
  );
};
