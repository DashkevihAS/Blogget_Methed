import {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Outlet, useParams} from 'react-router';
import {changePage, postRequest} from '../../../store/posts/postsSlice';
import Spinner from '../../../UI/Spinner/Spinner';
import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const posts = useSelector(state => state.posts.posts);
  const endList = useRef(null);
  const dispatch = useDispatch();
  const {page} = useParams();

  useEffect(() => {
    dispatch(changePage(page));
    dispatch(postRequest());
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(postRequest());
      }
    }, {
      rootMargin: '100px',
    });

    observer.observe(endList.current);

    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current]);

  return (
    <>
      <ul className={style.list}>
        {posts ? posts.map((post) => (
          <Post key={post.id} post={post} />
        )) : <div className={style.preload}><Spinner/></div>}
        <li className={style.end} ref={endList}/>
      </ul>
      <Outlet/>
    </>
  );
};

