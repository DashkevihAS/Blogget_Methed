import {
  POST_REQUEST,
  POST_REQUEST_ERROR,
  POST_REQUEST_SUCCESS
} from './postAction';


const initialState = {
  data: {},
  error: '',
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_REQUEST:
      return {
        ...state,
        error: '',
      };
    case POST_REQUEST_SUCCESS:
      return {
        ...state,
        data: action.data,
        error: '',
      };
    case POST_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
