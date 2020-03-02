import React from 'react';

import { SearchItemInterface } from '../../../interfaces';

const SearchListItem: React.FC<SearchItemInterface> = ({ prop: { title, url } }: SearchItemInterface) => (
  <div className="c-search-list-item">
    <img className="c-search-list-item__image" src={url} alt={title} />
    <div className="c-search-list-item__container">
      <h3 className="c-search-list-item__heading">{title}</h3>
    </div>
  </div>
);

export default SearchListItem;
