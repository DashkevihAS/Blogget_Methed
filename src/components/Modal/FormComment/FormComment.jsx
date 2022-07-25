import {useContext, useRef, useState, useEffect} from 'react';
import style from './FormComment.module.css';
import {Text} from '../../../UI/Text';
import {authContext} from '../../../context/authContext';

export const FormComment = () => {
  const {auth} = useContext(authContext);
  const textareaRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(textareaRef.current.value);
    textareaRef.current.value = '';
  };

  const handlerClick = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    if (isOpen) textareaRef.current.focus();
  }, [isOpen]);

  return (
    <>
      {isOpen ?
      <form onSubmit={handleSubmit} className={style.form} >
        <Text As='h3' size={14} tsize={18}>{auth.name}</Text>
        <textarea
          ref={textareaRef}
          className={style.textarea}
        >
        </textarea>
        <button className={style.btn} >Отправить</button>
      </form> :
      <button
        className={style.btn}
        onClick={handlerClick}
      >Написать комментарий</button>}
    </>
  );
};
