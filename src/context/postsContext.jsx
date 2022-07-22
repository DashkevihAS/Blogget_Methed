import React from 'react';
import PropTypes from 'prop-types';
import {usePost} from '../hooks/usePost';


export const postsContext = React.createContext({});

export const PostContextProvider = ({children}) => {
  const posts = usePost();

  return (
    <postsContext.Provider value={posts}>
      {children}
    </postsContext.Provider>
  );
};

PostContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
