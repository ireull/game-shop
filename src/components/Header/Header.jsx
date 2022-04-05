import { BiSearch } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';
import { Cart } from './Cart/Cart';

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
      <Cart />
    </div>
  );
};
