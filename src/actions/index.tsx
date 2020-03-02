export const changeQueryResults = (queryResults: object[]): object => ({
  type: 'UPDATE_QUERY_RESUTS',
  payload: queryResults,
});
