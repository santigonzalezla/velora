import { Routes, Route } from 'react-router-dom'
import Landing from '../view/Landing'
import Client from '../components/Client/Client';
import Artist from '../components/Artist/Artist'
import Company from '../components/Company/Company'
import Terms from '../components/Footer/Terms'
import Help from '../components/Footer/Help';

const RouterApp = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/Client' element={<Client />} />
      <Route path='/Artist' element={<Artist />} />
      <Route path='/Company' element={<Company />} />
      <Route path='/Terms' element={<Terms />} />
      <Route path='/Help' element={<Help />} />
    </Routes>
  );
}

export default RouterApp;
