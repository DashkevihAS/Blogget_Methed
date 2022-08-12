import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  loading: false,
  error: '',
  after: '',
  isLast: false,
  page: '',
  search: '',
};


export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload;
      state.isLast = false;
      state.after = '';
      // state.search = '';
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
    postsSearch: (state, action) => {
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
    setSearch: (state, action) => {
      state.after = '';
      state.search = action.payload;
      state.page = '';
    },
    clearSearch: (state) => {
      state.search = '';
    }
  },
});

export default postsSlice.reducer;

export const {
  changePage,
  postRequest,
  postRequestSuccess,
  postRequestError,
  postsSearch,
  setSearch,
  clearSearch
} = postsSlice.actions;
