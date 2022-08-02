import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {URL_API} from '../../api/const';

export const postRequestAsync = createAsyncThunk(
  'posts/fetch',
  (newPage, {getState}) => {
    const page = getState().posts.page;
    const token = getState().token.token;
    const after = getState().posts.after;
    const loading = getState().posts.loading;
    const isLast = getState().posts.isLast;
    const children = getState().posts.posts;

    if (!token || !loading || isLast) return {children};

    return axios(
      `${URL_API}/${page}?limit=10&${after ? `after=${after}` : ''}`, {
        headers: {
          Authorization: `bearer ${token}`
        },
      })
      .then(({data}) => (data.data))
      .catch((error) => ({error: error.toString()}));
  },
);
