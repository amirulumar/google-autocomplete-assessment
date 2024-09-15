import { ActionWithPayload } from "@/constants/types";
import { ADD_SEARCH_HISTORY, CLEAR_SEARCH_HISTORY, GET_SEARCH_HISTORY } from "./actionTypes";

const initialState = {
  history: [],
}

const SearchHistoryReducer = (state = initialState, action: ActionWithPayload) => {
  switch (action.type) {
    case ADD_SEARCH_HISTORY:
      return {
        ...state,
        history: [action.payload, ...state.history]
      }
    case CLEAR_SEARCH_HISTORY:
      return {
        ...state,
        history: []
      };
    case GET_SEARCH_HISTORY:
      return state;
    default:
      return state;
  }
}

export default SearchHistoryReducer;