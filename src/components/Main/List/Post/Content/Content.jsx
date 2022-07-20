import React from 'react';
import style from './Content.module.css';
import PropTypes from 'prop-types';

export const Content = ({author, title}) => (
  <div className={style.content} >
    <h2 >
      <a className={style.linkPost} href="#post">
        {title}
      </a>
    </h2>
    <a className={style.linkAuthor} href="#author">{author}</a>
  </div>
);


Content.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
};
