// import {
//   POST_REQUEST,
//   POST_REQUEST_ERROR,
//   POST_REQUEST_SUCCESS,
//   POST_REQUEST_SUCCESS_AFTER,
//   CHANGE_PAGE,
// } from './postsAction';


// const initialState = {
//   posts: [],
//   loading: false,
//   error: '',
//   after: '',
//   isLast: false,
//   page: '',
// };

// export const postsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case POST_REQUEST:
//       return {
//         ...state,
//         loading: true,
//         error: '',
//       };
//     case POST_REQUEST_SUCCESS:
//       return {
//         ...state,
//         posts: action.posts,
//         loading: false,
//         error: '',
//         after: action.after,
//         isLast: !action.after,
//       };
//     case POST_REQUEST_SUCCESS_AFTER:
//       return {
//         ...state,
//         posts: [...state.posts, ...action.posts],
//         loading: false,
//         error: '',
//         after: action.after,
//         isLast: !action.after,
//       };
//     case POST_REQUEST_ERROR:
//       return {
//         ...state,
//         loading: false,
//         error: action.error,
//       };
//     case CHANGE_PAGE:
//       return {
//         ...state,
//         page: action.page,
//         isLast: false,
//         after: '',
//       };
//     default:
//       return state;
//   }
// };
