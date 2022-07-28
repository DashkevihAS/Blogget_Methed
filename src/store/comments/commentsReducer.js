import {
  COMMENTS_REQUEST,
  COMMENTS_REQUEST_ERROR,
  COMMENTS_REQUEST_SUCCESS,
  COMMENTS_CLOSE
} from './commentsAction';


const initialState = {
  status: '',
  data: {},
  error: '',
};

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS_REQUEST:
      return {
        ...state,
        error: '',
        status: 'loading',
      };
    case COMMENTS_REQUEST_SUCCESS:
      return {
        ...state,
        data: action.data,
        status: 'loaded',

        error: '',
      };
    case COMMENTS_REQUEST_ERROR:
      return {
        ...state,
        status: 'error',
        error: action.error,
      };
    case COMMENTS_CLOSE:
      return {
        ...state,
        status: '',
        error: '',
        data: {},
      };
    default:
      return state;
  }
};
