import React from 'react';

import { SearchItemInterface } from '../../../interfaces';
import SearchListButton from '../search-list-button/SearchListButton';

const SearchListItem: React.FC<SearchItemInterface> = ({ prop }: SearchItemInterface) => {
  const { title, imageUrl }: any = prop;

  return (
    <div className="c-search-list-item">
      <img className="c-search-list-item__image" src={imageUrl} alt={title} />
      <div className="c-search-list-item__container">
        <h3 className="c-search-list-item__heading">{title}</h3>
      </div>
      <SearchListButton videoDetails={prop} />
    </div>
  );
};

export default SearchListItem;
