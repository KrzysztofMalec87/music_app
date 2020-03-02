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
    <div className="c-form">
      <form className="form-group c-form__container" onSubmit={handleSubmit} autoComplete="off">
        <label className="c-form__label" htmlFor="search_query">
          <span className="c-form__label-span">Search your music:</span>
        </label>
        <input
          className="form-control c-form__input"
          name="search_query"
          ref={textInputSearchRef}
          required
          type="text"
          id="search_query"
          placeholder=".. type your music title"
        />
        <button className="btn btn-primary c-form__button">Search</button>
      </form>
    </div>
  );
};

export default Form;
