import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { changeQueryResults } from '../../actions';
import { youtubeSearchResults } from '../../common/fetch';

const Form: React.FC = () => {
  const textInputSearchRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const handleSubmit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();

    const searchInputVal = textInputSearchRef.current?.value;

    const response = await youtubeSearchResults(searchInputVal);
    const {
      data: { items: queryResponseItems },
    } = response;

    if (!queryResponseItems) {
      return;
    }

    dispatch(changeQueryResults(queryResponseItems));
  };

  return (
    <form className="c-form" onSubmit={handleSubmit}>
      <input type="text" name="search_query" ref={textInputSearchRef} />
      <button>Search</button>
    </form>
  );
};

export default Form;
