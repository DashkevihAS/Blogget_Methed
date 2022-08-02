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
        state.posts = [...state.posts, ...action.payload.children];
      } else {
        state.posts = action.payload.children;
      }
      state.loading = false;
      state.error = '';
      state.after = action.payload.after;
      state.isLast = !action.payload.after;
    },
    [postRequestAsync.rejected.type]: (state, action) => {
      state.status = 'error';
      state.error = action.error;
    },
  },
});

export default postsSlice.reducer;
