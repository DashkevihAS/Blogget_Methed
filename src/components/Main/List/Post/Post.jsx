import style from './Post.module.css';
import notphoto from './img/notphoto.jpeg';
import PropTypes from 'prop-types';
import Date from './Date';
import Rating from './Rating';
import BtnDelete from './BtnDelete';
import Thumbnail from './Thumbnail';
import Content from './Content';


export const Post = ({post}) => {
  const {title, author, ups, thumbnail, created} = post;
  console.log({post});
  return (
    <li className={style.post}>
      <Thumbnail
        src={thumbnail === 'default' ? notphoto : thumbnail}
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
