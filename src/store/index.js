import {commentReducer} from './commentReducer';
import {tokenMiddleware} from './token/tokenAction';
import {tokenReducer} from './token/tokenReducer';
import {authReducer} from './auth/authReducer';
import postsReducer from './posts/postsSlice';
import commentsReducer from './comments/commentsSlice';
import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    comment: commentReducer,
    auth: authReducer,
    posts: postsReducer,
    comments: commentsReducer,
  },
  middleware: (getDefaultMiddleawre) =>
    getDefaultMiddleawre().concat(tokenMiddleware),
});
