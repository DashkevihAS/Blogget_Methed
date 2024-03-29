import {
  SEARCH_REQUEST,
  SEARCH_REQUEST_ERROR,
  SEARCH_REQUEST_SUCCESS
} from './searchAction';

const initialState = {
  posts: [],
  loading: false,
  error: '',
  after: '',
  isLast: false,
  page: '',
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
        posts: [],
      };
    case SEARCH_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        after: action.after,
        isLast: !action.after,
        posts: action.children,
      };
    case SEARCH_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
