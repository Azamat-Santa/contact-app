import { ADD_FAVORITE, DELETE_FAVORITE, FILTER_SEARCH, FILTER_USERS, CHANGE_USER, GET_ALL_USERS } from './typs';

export const getAllUsers = (payload) => ({ type: GET_ALL_USERS, payload });
export const addFavoriteAction = (payload) => ({ type: ADD_FAVORITE, payload });
export const removeFavoriteAction = (payload) => ({
  type: DELETE_FAVORITE,
  payload,
});

export const filterUsersAction = (payload) => ({ type: FILTER_USERS, payload });
export const searchFilterAction = (payload) => ({
  type: FILTER_SEARCH,
  payload,
});
export const changeUserAction = (payload) => ({
  type: CHANGE_USER,
  payload,
});