import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  loading: false,
  error: '',
  after: '',
  isLast: false,
  page: '',
};


export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload;
      state.isLast = false;
      state.after = '';
    },
    postRequest: (state) => {
      state.loading = true;
      state.error = '';
    },
    postRequestSuccess: (state, action) => {
      if (state.after && (action.payload.after !== state.after)) {
        action.payload ?
        state.posts = [...state.posts, ...action.payload.children] :
        state.posts;
      } else {
        action.payload ? state.posts = action.payload.children : state.posts;
      }
      state.loading = false;
      state.error = '';
      action.payload ? state.after = action.payload.after : state.after;
      action.payload ? state.isLast = !action.payload.after : state.isLast;
    },
    postRequestError: (state, action) => {
      state.status = 'error';
      state.error = action.error;
    },
  },
});

export default postsSlice.reducer;

export const {
  changePage,
  postRequest,
  postRequestSuccess,
  postRequestError,
} = postsSlice.actions;
