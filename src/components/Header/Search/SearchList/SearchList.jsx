import React from 'react';
import { SearchItem } from '../SearchItem/SearchItem';

import styles from './SearchList.module.scss';

const SearchList = ({
  searchGame,
  searchQuery,
  setIsMenuVisible,
  setSearchQuery,
}) => {
  console.log(searchQuery);
  return (
    <>
      {searchQuery.length ? (
        searchGame.map((game) => (
          <SearchItem
            game={game}
            searchQuery={searchQuery}
            setIsMenuVisible={setIsMenuVisible}
            setSearchQuery={setSearchQuery}
          />
        ))
      ) : (
        <div className={styles.gameItem}>Что ищем ?</div>
      )}
    </>
  );
};

export default SearchList;
