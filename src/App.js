import Header from './components/Header';
import Main from './components/Main';
import {PostContextProvider} from './context/postsContext';
import {useDispatch} from 'react-redux';
import {updateToken} from './store/tokenReducer';
import {getToken} from './api/token';

const App = () => {
  const dispatch = useDispatch();
  dispatch(updateToken(getToken()));

  return (
    <>
      <Header />
      <PostContextProvider>
        <Main />
      </PostContextProvider>
    </>
  );
};

export default App;
