import { ADD_SEARCH_HISTORY, CLEAR_SEARCH_HISTORY, GET_SEARCH_HISTORY } from "./actionTypes";

export const getSearchHistory = () => ({
  type: GET_SEARCH_HISTORY,
});

export const addSearchHistory = (data: string) => ({
  type: ADD_SEARCH_HISTORY,
  payload: data
});

export const clearSearchHistory = () => ({
  type: CLEAR_SEARCH_HISTORY,
});

