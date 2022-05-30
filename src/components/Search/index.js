import React from 'react';

import styles from './Search.module.scss';
import icon from '../../assets/img/search_icon.svg'
import close from '../../assets/img/close_icon.svg'

const Search = ({ searchValue, setSearchValue }) => {
  return (
    <div className={styles.root}>
      <img className={styles.icon} src={icon} alt="Поиск" />
      <input
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.input}
        placeholder="Поиск пиццы..."
        value={searchValue}
      />
      {searchValue && (
        <img onClick={() => setSearchValue('')} className={styles.clear} src={close} alt="Очистить" />
      )}
    </div>
  );
};

export default Search;