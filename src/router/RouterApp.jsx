import { Routes, Route } from 'react-router-dom'
import Landing from '../view/Landing'

const RouterApp = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
    </Routes>
  );
}

export default RouterApp;
