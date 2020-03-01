import axios, { AxiosResponse } from 'axios';
import { Youtube } from './enums';

const youtubeSearchResults = (searchQuery: string): Promise<AxiosResponse<AxiosResponse<unknown>>> =>
  axios.get<AxiosResponse>(Youtube.YOUTUBE_SEARCH_LINK, {
    params: {
      q: searchQuery,
      maxResults: 25,
      part: 'snippet',
      type: 'video',
      key: Youtube.YOUTUBE_API_KEY,
    },
  });

export { youtubeSearchResults };
