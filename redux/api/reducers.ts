import { ActionWithPayload } from "@/constants/types";
import { FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from "./actionTypes";

const initialState = {
  data: null,
  isLoading: false,
  error: null
};

const apiReducer = (state = initialState, action: ActionWithPayload) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, isLoading: true, error: null };
    case FETCH_DATA_SUCCESS:
      return { ...state, data: action.payload, isLoading: false };
    case FETCH_DATA_FAILURE:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};

export default apiReducer;