import style from './Post.module.css';
import PropTypes from 'prop-types';
import Date from './Date';
import Rating from './Rating';
import BtnDelete from './BtnDelete';
import Thumbnail from './Thumbnail';
import Content from './Content';
import nophoto from './img/notphoto.jpeg';

export const Post = ({post}) => {
  const {
    title,
    author,
    ups,
    thumbnail,
    created,
    thumbnail_height: thumbnailHeight,
    thumbnail_width: thumbnailWidth
  } = post;
  console.log({post});

  return (
    <li className={style.post}>
      <Thumbnail
        src={(thumbnailHeight && thumbnailWidth) ? thumbnail : nophoto}
        alt={title}/>

      <Content author={author} title={title} />

      <Rating ups={ups}/>

      <Date date={created}/>

      <BtnDelete/>
    </li>
  );
};

Post.propTypes = {
  post: PropTypes.object,
};
