import {usePost} from '../../../hooks/usePost';
import Spinner from '../../../UI/Spinner/Spinner';
import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const [posts] = usePost();
  return (
    <ul className={style.list}>
      {Array.isArray(posts) ? posts.map((post) => (
        <Post key={post.data.id} post={post.data} />
      )) : <div className={style.preload}><Spinner/></div>}
    </ul>
  );
};

