import React from 'react';
import style from './Error.module.css';

export const Error = () => (
  <div className={style.error}>
    <img className={style.img}
      src="https://blog.vverh.digital/wp-content/uploads/2020/06/oblojka-404.png"
      alt="Error 404" />
  </div>
);

