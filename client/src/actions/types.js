// All action types will be exported from here

// Action types for alerts
export const SET_ALERT = "SET_ALERT";
export const REMOVE_ALERT = "REMOVE_ALERT";

//Action types for auth
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const USER_LOADED = "USER_LOADED";
export const AUTH_ERROR = "AUTH_ERROR";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";

// Action types for profile
export const GET_PROFILE = "GET_PROFILE";
export const GET_PROFILES = "GET_PROFILES";
export const GET_REPOS = "GET_REPOS";
export const CLEAR_PROFILE = "CLEAR_PROFILE";
export const PROFILE_ERROR = "PROFILE_ERROR";
export const UPDATE_PROFILE = "UPDATE_PROFILE";

// Action type for deleting account
export const ACCOUNT_DELETED = "ACCOUNT_DELETED";

// Action types for posts

export const Add_POST = 'Add_POST'
export const GET_POSTS = 'GET_POSTS'
export const POST_ERROR = 'POST_ERROR'
export const UPDATE_LIKES = 'UPDATE_LIKES'
export const DELETE_POST = 'DELETE_POST'