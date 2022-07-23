import React from 'react';
import style from './Thumbnail.module.css';
import PropTypes from 'prop-types';

export const Thumbnail = ({src, alt}) => (
  <img className={style.img} src={src} alt={alt} />
);

Thumbnail.propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  alt: PropTypes.string,
};
