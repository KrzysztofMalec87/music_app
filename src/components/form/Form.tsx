import React, { useRef } from 'react';

import { youtubeSearchResults } from '../../common/fetch';

const Form: React.FC = () => {
  const textInputSearchRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();

    const searchInputVal = textInputSearchRef.current!.value;

    const response = await youtubeSearchResults(searchInputVal);

    console.log(response);
  };

  return (
    <form className="c-form" onSubmit={handleSubmit}>
      <input type="text" name="search_query" ref={textInputSearchRef} />
      <button>Search</button>
    </form>
  );
};

export default Form;
