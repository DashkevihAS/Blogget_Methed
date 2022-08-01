import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import ReactDom from 'react-dom';
import {useEffect, useRef} from 'react';
import {useCommentsData} from '../../hooks/useCommentsData';
import {Comments} from './Comments/Comments';
import {FormComment} from './FormComment/FormComment';
import Spinner from '../../UI/Spinner/Spinner';
import {useParams, useNavigate} from 'react-router-dom';

export const Modal = () => {
  const {id, page} = useParams();
  const navigate = useNavigate();
  const overlayRef = useRef(null);
  const [post, comments, status] = useCommentsData(id);

  const handleClick = e => {
    const target = e.target;
    if (target === overlayRef.current) {
      navigate(`/category/${page}`);
    }
  };
  const handleKeydown = e => {
    if (e.key === 'Escape') {
      navigate(`/category/${page}`);
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
      {status === 'loading' &&
      <div className={style.modal}>
        <div className={style.spinner} ><Spinner /></div>
        <h2 className={style.load} >Загрузка ... </h2>
      </div>
      }
      {status === 'error' &&
        navigate('*')
      }
      {status === 'loaded' && post &&
        <div className={style.modal}>
          <h2 className={style.title} >{post.title}</h2>

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
              {post.selftext}
            </Markdown>
          </div>

          <p className={style.author}>{post.author}</p>
          <FormComment/>
          <Comments comments={comments}/>
          <button
            className={style.close}
            onClick={() => navigate(`/category/${page}`)}
          >
            <CloseIcon/>
          </button>
        </div>}
      {status === '' &&
      <div className={style.modalAuth}>
        <p className={style.needAuth} >Необходимо выполнить авторизацию! </p>
      </div>}
    </div>,
    document.getElementById('modal-root')
  );
};

Modal.propTypes = {
  id: PropTypes.string,
  closeModal: PropTypes.func,
};
