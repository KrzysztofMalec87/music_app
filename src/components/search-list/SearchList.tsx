import React from 'react';
import { useSelector } from 'react-redux';

import { AppStateinterface } from '../../interfaces';
import SearchListItem from './search-list-item/SearchListItem';

const SearchList: React.FC = () => {
  const searchList: object[] = [];
  const queryList = useSelector<AppStateinterface, object[]>(store => store.queryResults);

  if (queryList) {
    queryList.map(item => {
      const {
        id: { videoId },
        snippet: {
          title,
          thumbnails: {
            default: { url },
          },
        },
      }: any = item;

      searchList.push({ videoId, title, url });
    });
  }

  return (
    <div className="container">
      {searchList.length > 0 && (
        <div className="c-search-list">
          {searchList.map(item => {
            const key = Math.random();

            return <SearchListItem key={key} prop={item} />;
          })}
        </div>
      )}
    </div>
  );
};

export default SearchList;
