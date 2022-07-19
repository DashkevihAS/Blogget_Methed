import style from './Post.module.css';
import notphoto from './img/notphoto.jpeg';
import PropTypes from 'prop-types';
import Date from './Date';
import Rating from './Rating';
import BtnDelete from './BtnDelete';


export const Post = ({postData}) => {
  const {title, author, ups, date} = postData;
  console.log(title, author, ups, date);
  return (
    <li className={style.post}>
      <img className={style.img} src={notphoto} alt="{title}" />

      <div className={style.content} >
        <h2 className={style.title}>
          <a className={style.linkPost} href="#post">
            {title}
          </a>
        </h2>
        <a className={style.linkAuthor} href="#author">{author}</a>
      </div>

      <Rating ups={ups}/>

      <Date date={date}/>

      <BtnDelete/>
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
