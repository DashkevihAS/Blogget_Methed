import {createSlice} from '@reduxjs/toolkit';
import {postRequestAsync} from './postsAction';

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
  },
  extraReducers: {
    [postRequestAsync.pending.type]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [postRequestAsync.fulfilled.type]: (state, action) => {
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
    [postRequestAsync.rejected.type]: (state, action) => {
      state.status = 'error';
      state.error = action.error;
    },
  },
});

export default postsSlice.reducer;
