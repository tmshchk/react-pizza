import React from 'react';
import debounce from 'lodash.debounce';

import styles from './Search.module.scss';
import icon from '../../assets/img/search_icon.svg'
import close from '../../assets/img/close_icon.svg'
import { SearchContext } from '../../App';

const Search = () => {
  const [value, setValue] = React.useState('');
  const { setSearchValue } = React.useContext(SearchContext);
  const inputRef = React.useRef();

  const onClickClear = () => {
    setSearchValue('');
    setValue('');
    inputRef.current.focus();
  }

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 500),
    [],
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <img className={styles.icon} src={icon} alt="Поиск" />
      <input
        ref={inputRef}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Поиск пиццы..."
        value={value}
      />
      {value && <img onClick={onClickClear} className={styles.clear} src={close} alt="Очистить" />}
    </div>
  );
};

export default Search;