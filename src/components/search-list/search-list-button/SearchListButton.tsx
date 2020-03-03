import React from 'react';
import { useDispatch } from 'react-redux';

import { OneKeyObjectInterface } from '../../../interfaces';
import { addToPlaylist } from '../../../actions';

const SearchListButton: React.FC<OneKeyObjectInterface> = (videoDetails: OneKeyObjectInterface) => {
  const dispatch = useDispatch();

  const handleClick = (): object => dispatch(addToPlaylist(videoDetails));

  return (
    <button className="btn btn-primary btn-sm c-search-list-button" onClick={handleClick}>
      Add
    </button>
  );
};

export default SearchListButton;
