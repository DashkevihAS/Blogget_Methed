import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import ReactDom from 'react-dom';
import {useEffect, useRef} from 'react';
import {useCommentsData} from '../../hooks/useCommentsData';
import {Comments} from './Comments/Comments';
import {FormComment} from './FormComment/FormComment';
import Spinner from './Spinner/Spinner';

export const Modal = ({id, closeModal}) => {
  const overlayRef = useRef(null);
  const data = useCommentsData(id);

  const handleClick = e => {
    const target = e.target;
    if (target === overlayRef.current) {
      closeModal();
    }
  };
  const handleKeydown = e => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.addEventListener('click', handleClick);
      document.addEventListener('keydown', handleKeydown);
    };
  }, []);

  return ReactDom.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      {data ?
        <div className={style.modal}>
          <h2 className={style.title} >{data[0].title}</h2>

          <div className={style.content}>
            <Markdown options={{
              // чтобы ссылке в тексте открывались на новой вкладке
              overrides: {
                a: {
                  props: {
                    target: '_blank',
                  },
                },
              },
            }}>
              {data[0].selftext}
            </Markdown>
          </div>

          <p className={style.author}>{data[0].author}</p>
          <FormComment/>
          <Comments comments={data[1]}/>
          <button
            className={style.close}
            onClick={closeModal}
          >
            <CloseIcon/>
          </button>
        </div> :
        <div className={style.modal}>
          <h2 className={style.load} >Загрузка ... </h2>
          <Spinner/>
        </div>}
    </div>,
    document.getElementById('modal-root')
  );
};

Modal.propTypes = {
  id: PropTypes.string,
  closeModal: PropTypes.func,
};