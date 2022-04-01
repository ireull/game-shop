import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { FiShoppingCart } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.searchQuery}>
        <div className={styles.searchIcon}>
          <BiSearch />
        </div>
        <div>
          <input placeholder='Поиск' />
        </div>
      </div>
      <div>
        <ul className={styles.navigate}>
          <NavLink to='/'>Главное</NavLink>
          <NavLink to='/games'>Все игры</NavLink>
          <NavLink to='/news'>Новости</NavLink>
        </ul>
      </div>
      <div className={styles.cart}>
        <div className={styles.cartIcon}>
          <FiShoppingCart />
        </div>
        <div className={styles.totalPrice}>
          <span>В корзине ничего нет</span>
        </div>
      </div>
    </div>
  );
};
