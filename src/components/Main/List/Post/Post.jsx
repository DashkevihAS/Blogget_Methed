import style from './Post.module.css';
import PropTypes from 'prop-types';
import Date from './Date';
import Rating from './Rating';
import BtnDelete from './BtnDelete';
import Thumbnail from './Thumbnail';
import Content from './Content';
import nophoto from './img/notphoto.jpeg';
// import {useCommentsData} from '../../../../hooks/useCommentsData';

export const Post = ({post}) => {
  // console.log(useCommentsData());
  const {
    title,
    author,
    ups,
    thumbnail,
    created: date,
    id,
    thumbnail_height: thumbnailHeight,
    thumbnail_width: thumbnailWidth
  } = post;

  return (
    <li className={style.post}>
      <Thumbnail
        src={(thumbnailHeight && thumbnailWidth && (thumbnail.length > 10)) ?
        thumbnail :
        nophoto}
        alt={title}/>

      <Content author={author} title={title} id={id} />

      <Rating ups={ups}/>

      <Date date={date}/>

      <BtnDelete/>
    </li>
  );
};

Post.propTypes = {
  post: PropTypes.object,
};
