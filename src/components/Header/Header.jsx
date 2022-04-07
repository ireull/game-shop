import { NavLink } from 'react-router-dom';

import { Cart } from './Cart/Cart';
import { SearchMenu } from './Search/SearchMenu/SearchMenu';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <div className={styles.header}>
      <SearchMenu />
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
