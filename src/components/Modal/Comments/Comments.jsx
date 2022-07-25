import React from 'react';
import style from './Comments.module.css';
import PropTypes from 'prop-types';
import Date from '../../Main/List/Post/Date';
import {Text} from '../../../UI/Text';


export const Comments = ({comments}) => {
  console.log(comments);
  return (
    <ul className={style.list}>
      {comments.length > 0 ? comments.map(comment => {
        if (comment.created) {
          return (
            <li key={comment.id} className={style.item}>
              <Text As='h3'
                className={style.author}
                size={18}
                tsize={22}
              >
                {comment.author}
              </Text>
              <Text As="p"
                className={style.comment}
                size={14}
                tsize={18}
              >
                {comment.body}
              </Text>
              <Date date={comment.created} />
            </li>
          );
        }
      }) : <Text As='p'
        className={style.comment}
        size={14}
        tsize={18}
        bold
      >
        Нет комментариев
      </Text>}
    </ul>
  );
};

Comments.propTypes = {
  comments: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ])
};
