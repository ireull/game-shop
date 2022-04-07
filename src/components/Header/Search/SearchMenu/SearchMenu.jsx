import React, { useState } from 'react';

import { BiSearch } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import SearchList from '../SearchList/SearchList';

import styles from './SearchMenu.module.scss';

export const SearchMenu = () => {
  const games = useSelector((state) => state.games.allGames);

  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const searchGame = games.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const setVisibleMenu = () => {
    if (isMenuVisible) {
    }
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div className={styles.searchQuery}>
      <div className={styles.searchIcon}>
        <BiSearch />
      </div>
      <div>
        <input
          placeholder='Поиск игры'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onClick={setVisibleMenu}
        />
        <div className={styles.searchWindow}>
          {isMenuVisible && (
            <SearchList
              searchGame={searchGame}
              searchQuery={searchQuery}
              setIsMenuVisible={setIsMenuVisible}
              setSearchQuery={setSearchQuery}
            />
          )}
        </div>
      </div>
    </div>
  );
};
