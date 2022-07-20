import style from './Post.module.css';
import notphoto from './img/notphoto.jpeg';
import PropTypes from 'prop-types';
import Date from './Date';
import Rating from './Rating';
import BtnDelete from './BtnDelete';
import Thumbnail from './Thumbnail';
import Content from './Content';


export const Post = ({postData}) => {
  const {title, author, ups, date} = postData;
  console.log(title, author, ups, date);
  return (
    <li className={style.post}>
      <Thumbnail src={notphoto} alt={title}/>

      <Content author={author} title={title} />

      <Rating ups={ups}/>

      <Date date={date}/>

      <BtnDelete/>
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
