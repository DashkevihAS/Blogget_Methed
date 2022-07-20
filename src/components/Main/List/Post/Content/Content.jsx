import React from 'react';
import style from './Content.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';

export const Content = ({author, title}) => (
  <div className={style.content} >
    <Text As='h2' className={style.title} >
      <Text As='a' size={18} tsize={24} className={style.linkPost} href="#post">
        {title}
      </Text>
    </Text>
    <Text
      As='a'
      size={16}
      tsize={18}
      color='orange'
      className={style.linkAuthor}
      href="#author">
      {author}
    </Text>
  </div>
);


Content.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
};
