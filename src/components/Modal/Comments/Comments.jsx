import React from 'react';
import style from './Comments.module.css';
import PropTypes from 'prop-types';
import Date from '../../Main/List/Post/Date';
import {Text} from '../../../UI/Text';
import Markdown from 'markdown-to-jsx';


export const Comments = ({comments}) => (
  <ul className={style.list}>
    {comments.length ? comments.map(comment => {
      if (comment.created &&
      comment.id &&
      comment.author && comment.author !== '[deleted]' &&
      comment.body && comment.body !== '[removed]'
      ) {
        return (
          <li key={comment.id} className={style.item}>
            <Text As='h3'
              className={style.author}
              size={18}
              tsize={22}
            >
              {comment.author}
            </Text>
            <Text As="div"
              className={style.comment}
              size={14}
              tsize={18}
            >
              <Markdown className={style.comment} options={{
                // чтобы ссылке в тексте открывались на новой вкладке
                overrides: {
                  a: {
                    props: {
                      target: '_blank',
                    },
                  },
                },
              }}>
                {comment.body}
              </Markdown>
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


Comments.propTypes = {
  comments: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ])
};
