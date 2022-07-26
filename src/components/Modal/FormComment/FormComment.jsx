import {useContext, useRef, useState, useEffect} from 'react';
import style from './FormComment.module.css';
import {Text} from '../../../UI/Text';
import {authContext} from '../../../context/authContext';
import {useSelector, useDispatch} from 'react-redux';
import {updateComment} from '../../../store/index';

export const FormComment = () => {
  const value = useSelector(state => state.comment);
  const dispatch = useDispatch();

  const {auth} = useContext(authContext);
  const textareaRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };

  const handlerClick = () => {
    setIsOpen(true);
  };

  const handlerChange = (e) => {
    dispatch(updateComment(e.target.value));
  };

  useEffect(() => {
    if (isOpen) textareaRef.current.focus();
  }, [isOpen]);

  return (
    <>
      {isOpen ?
      <form onSubmit={handleSubmit} className={style.form} >
        <Text As='h3' size={14} tsize={18}>
          {auth.name}
        </Text>
        <textarea
          className={style.textarea}
          value={value}
          ref={textareaRef}
          onChange={handlerChange}
        />
        <button className={style.btn} >Отправить</button>
      </form> :
      <button
        className={style.btn}
        onClick={handlerClick}
      >Написать комментарий</button>}
    </>
  );
};
