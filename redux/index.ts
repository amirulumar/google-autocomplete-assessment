import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";
import apiReducer from "./api/reducers";
import searchHistoryReducer from "./search-history/reducers";

const combinedReducers = combineReducers({
  searchHistory: searchHistoryReducer,
  api: apiReducer
})

const store = createStore(combinedReducers, {}, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store

export default store;