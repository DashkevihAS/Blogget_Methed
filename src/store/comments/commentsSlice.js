import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  status: '',
  post: {},
  comments: [],
  error: '',
  id: '',
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    commentsClearStatus: (state) => {
      state.status = '';
      state.error = '';
    },
    commentsRequest: (state, action) => {
      state.error = '';
      state.status = 'loading';
      state.id = action.payload;
    },
    commentsRequestSuccess: (state, action) => {
      state.post = action.payload.post;
      state.comments = action.payload.comments;
      state.status = 'loaded';
      state.error = '';
    },
    commentsRequestError: (state, action) => {
      state.status = 'error';
      state.error = action.payload;
    },
  },
});

export const {
  commentsClearStatus,
  commentsRequest,
  commentsRequestSuccess,
  commentsRequestError,
} = commentsSlice.actions;

export default commentsSlice.reducer;
