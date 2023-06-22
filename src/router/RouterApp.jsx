import { Routes, Route } from 'react-router-dom'
import Landing from '../view/Landing'
import Client from '../components/Client/Client';
import Artist from '../components/Artist/Artist'
import Company from '../components/Company/Company'
import Login from '../components/Login/Login';
import HomeApp from '../components/HomeApp/HomeApp'

const RouterApp = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/Client' element={<Client />} />
      <Route path='/Artist' element={<Artist />} />
      <Route path='/Company' element={<Company />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Home' element={<HomeApp />} />
    </Routes>
  );
}

export default RouterApp;
