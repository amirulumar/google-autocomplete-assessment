import axios from "axios";
import { Dispatch } from "redux";
import { FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from "./actionTypes";

export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST
});

export const fetchDataSuccess = (data: google.maps.places.AutocompleteResponse) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data
});

export const fetchDataFailure = (error: any) => ({
  type: FETCH_DATA_FAILURE,
  payload: error
});

const baseUrl = "https://maps.googleapis.com/maps/api/place";

export const fetchAutocomplete = (input: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchDataRequest());
    try {
      const url = "/autocomplete/json"
      const response = await axios.get(baseUrl + url + "?input=" + input);
      dispatch(fetchDataSuccess(response.data));
    } catch (error) {
      dispatch(fetchDataFailure(error));
    }
  };
};