import { GET_PROFILE, PROFILE_ERROR, CLEAR_PROFILE, UPDATE_PROFILE } from "../actions/types";

const initialState = {
  profile: null, // when logged in, it will load
  profiles: [], // list of all developers
  repos: [],
  loading: true,
  error: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false
      }
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        repos: [],
        profile: null,
        loading: false
      }
    default:
      return state;
  }
};
