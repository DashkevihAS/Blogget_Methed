import React from 'react';
import {Text} from '../../../UI/Text';
import style from './Home.module.css';

export const Home = () => (
  <div className={style.home}>
    <Text As='h2'
      size={22}
      tsize={26}
      bold
      center >
    Стартовая страница
    </Text>

    <Text As='p' size={20} tsize={24} center >Добро пожаловать!</Text>

    <Text As='p' size={20} tsize={24} center >Выберите категорию</Text>

  </div>
);

