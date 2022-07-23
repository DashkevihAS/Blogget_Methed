import {useContext} from 'react';
import {postsContext} from '../../../context/postsContext';
import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const [posts] = useContext(postsContext);

  return (
    <ul className={style.list}>
      {posts ? posts.map((post) => (
        <Post key={post.data.id} post={post.data} />
      )) : null}
    </ul>
  );
};

