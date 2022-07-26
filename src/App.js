import Header from './components/Header';
import Main from './components/Main';
import {AuthContextProvider} from './context/authContext';
import {PostContextProvider} from './context/postsContext';
import {Provider} from 'react-redux';
import {store} from './store/index';

function App() {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <Header />
        <PostContextProvider>
          <Main />
        </PostContextProvider>
      </AuthContextProvider>
    </Provider>
  );
}

export default App;
