import { Routes, Route } from 'react-router-dom'
import Landing from '../view/Landing'
import Client from '../components/Client/Client';

const RouterApp = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/Client' element={<Client />} />
    </Routes>
  );
}

export default RouterApp;
