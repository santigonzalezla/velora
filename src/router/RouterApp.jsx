import { Routes, Route } from 'react-router-dom'
import Landing from '../view/Landing'
import Client from '../components/Client/Client';
import Artist from '../components/Artist/Artist'
import Company from '../components/Company/Company'
import Login from '../components/Login/Login';
import HomeApp from '../components/HomeApp/HomeApp'
import Terms from '../components/Footer/Terms'
import Help from '../components/Footer/Help';
import ViewArtist from '../components/HomeApp/ViewArtist';
import Chats from '../components/HomeApp/Chats'
import Lives from '../components/HomeApp/Lives';
import Subscriptions from '../components/HomeApp/Subscriptions';
import Billing from '../components/HomeApp/Billing';
import VideoCall from '../components/HomeApp/VideoCall';
import ArtistApp from '../components/ArtistApp/ArtistApp';
import ArtstChats from '../components/ArtistApp/ArtistChats'
import ArtistPorfile from '../components/ArtistApp/ArtistPorfile'
import ClientPorfile from '../components/ArtistApp/ClientPorfile';
import ArtistDashboard from '../components/ArtistApp/ArtistDashboard'
import ClientProtectedRoute from '../utils/clientProtectedRoute';

const home = () => {
  return (
    <ClientProtectedRoute>
      <HomeApp />
    </ClientProtectedRoute>
  )
}

const chats = () => {
  return (
    <ClientProtectedRoute>
      <Chats />
    </ClientProtectedRoute>
  )
}

const subscriptions = () => {
  return (
    <ClientProtectedRoute>
      <Subscriptions />
    </ClientProtectedRoute>
  )
}

const billing = () => {
  return (
    <ClientProtectedRoute>
      <Billing />
    </ClientProtectedRoute>
  )
}

const videoCall = () => {
  return (
    <ClientProtectedRoute>
      <VideoCall />
    </ClientProtectedRoute>
  )
}




const RouterApp = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/Client' element={<Client />} />
      <Route path='/Artist' element={<Artist />} />
      <Route path='/Company' element={<Company />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Home' element={home()} />
      <Route path='/Terms' element={<Terms />} />
      <Route path='/Help' element={<Help />} />
      <Route path='/ViewArtist' element={<ViewArtist />} />
      <Route path='/Chats' element={chats()} />
      <Route path='/Lives' element={<Lives />} />
      <Route path='/Subscriptions' element={subscriptions()} />
      <Route path='/Billing' element={billing()} />
      <Route path='/VideoCall' element={videoCall()} />
      <Route path='/ArtistApp' element={<ArtistApp />} />
      <Route path='/ArtstChats' element={<ArtstChats />} />
      <Route path='/ArtistPorfile' element={<ArtistPorfile />} />
      <Route path='/ClientPorfile' element={<ClientPorfile />} />
      <Route path='/ArtistDashboard' element={<ArtistDashboard />} />
      <Route path="*" element={<Landing />}/>
    </Routes>
  );
}

export default RouterApp;
