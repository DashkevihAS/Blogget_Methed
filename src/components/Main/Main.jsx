import style from './Main.module.css';
import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';
import {Navigate, Route, Routes} from 'react-router-dom';
import Modal from '../Modal';
import {Home} from './Home/Home';
import {Error} from './Error/Error';

export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Tabs />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/category/:page' element={<List/>}>
          <Route path='post/:id' element={<Modal/>} />
        </Route>
        <Route path='auth' element={<Navigate to='/'/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </Layout>
  </main>
);

