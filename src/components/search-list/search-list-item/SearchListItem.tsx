import React from 'react';

import { SearchItemInterface } from '../../../interfaces';
import SearchListButton from '../search-list-button/SearchListButton';

const SearchListItem: React.FC<SearchItemInterface> = prop => {
  const { title, url }: any = prop.prop;

  return (
    <div className="c-search-list-item">
      <img className="c-search-list-item__image" src={url} alt={title} />
      <div className="c-search-list-item__container">
        <h3 className="c-search-list-item__heading">{title}</h3>
      </div>
      <SearchListButton />
    </div>
  );
};

export default SearchListItem;
