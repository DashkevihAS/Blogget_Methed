import {useContext, useRef} from 'react';
import style from './FormComment.module.css';
import {Text} from '../../../UI/Text';
import {authContext} from '../../../context/authContext';

export const FormComment = () => {
  const {auth} = useContext(authContext);
  const textareaRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(textareaRef.current.value);
    textareaRef.current.value = '';
  };
  return (
    <form onSubmit={handleSubmit} className={style.form} >
      <Text As='h3' size={14} tsize={18}>{auth.name}</Text>
      <textarea ref={textareaRef} className={style.textarea} ></textarea>
      <button className={style.btn} >Отправить</button>
    </form>
  );
};
