import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';
import {assignId} from '../../../utils/generateRandomId';
import {debounceRaf} from '../../../utils/debounce.js';
import {Text} from '../../../UI/Text';

import {ReactComponent as ArrowIcon} from './img/arrow.svg';
import {ReactComponent as HomeIcon} from './img/home.svg';
import {ReactComponent as TopIcon} from './img/top.svg';
import {ReactComponent as BestHot} from './img/best.svg';
import {ReactComponent as HotIcon} from './img/hot.svg';
import {useNavigate} from 'react-router';

const LIST = [
  {value: 'Главная', Icon: HomeIcon, link: 'rising'},
  {value: 'Топ', Icon: TopIcon, link: 'top'},
  {value: 'Лучшие', Icon: BestHot, link: 'best'},
  {value: 'Горячие', Icon: HotIcon, link: 'hot'}
].map(assignId);

export const Tabs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdown, setisDropdown] = useState(true);
  const [itemMenu, setItemMenu] = useState('Меню');
  const navigate = useNavigate();

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setisDropdown(true);
    } else {
      setisDropdown(false);
    }
  };

  useEffect(() => {
    const debounceResize = debounceRaf(handleResize);
    debounceResize();
    window.addEventListener('resize', debounceResize);
    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);

  return (
    <div className={style.container}>
      {isDropdown && (
        <div className={style.wrapperBtn}>
          <button
            className={style.btn}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <Text size={18} tsize={22} bold>{itemMenu}</Text>
            <ArrowIcon width={15} height={15} />
          </button>
        </div>
      )}

      {(isDropdownOpen || !isDropdown) && (
        <ul className={style.list} onClick={() => setIsDropdownOpen(false)}>
          {LIST.map(({value, id, Icon, link}) => (
            <li className={style.item} key ={id} >
              <button
                className={style.btn}
                onClick={() => {
                  setItemMenu(value);
                  navigate(`/category/${link}`);
                }}>
                <Text size={18} tsize={22} bold>{value}</Text>
                {Icon && <Icon width={30} height={30}/>}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func
};

