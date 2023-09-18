import { Routes, Route } from 'react-router-dom'
import Landing from '../view/Landing'
import Client from '../components/Client/Client';
import Artist from '../components/Artist/Artist'
import Company from '../components/Company/Company'
import Terms from '../components/Footer/Terms'
import Help from '../components/Footer/Help';
import ArtistApp from '../components/ArtistApp/ArtistApp';
import ArtistPorfile from '../components/ArtistPorfile/ArtistPorfile'
import ArtstChats from '../components/ArtistChats/ArtistChats'
import ClientPorfile from '../components/ClientPorfile/ClientPorfile'
import ArtistDashboard from '../components/ArtistDashboard/ArtistDashboard'
import VideoCallArtist from '../components/VideoCallArtist/VideoCallArtist'
import LivesArtist from '../components/LivesArtist/LivesArtist'
import BillingArtist from '../components/BillingArtist/BillingArtist'

const RouterApp = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/Client' element={<Client />} />
      <Route path='/Artist' element={<Artist />} />
      <Route path='/Company' element={<Company />} />
      <Route path='/Terms' element={<Terms />} />
      <Route path='/Help' element={<Help />} />
      <Route path='/ArtistApp' element={<ArtistApp />} />
      <Route path='/ArtstChats' element={<ArtstChats />} />
      <Route path='/ArtistPorfile' element={<ArtistPorfile />} />
      <Route path='/ClientPorfile' element={<ClientPorfile />} />
      <Route path='/ArtistDashboard' element={<ArtistDashboard />} />
      <Route path='/VideoCallArtist' element={<VideoCallArtist />} />
      <Route path='/LivesArtist' element={<LivesArtist />} />
      <Route path='/BillingArtist' element={<BillingArtist />} />
    </Routes>
  );
}

export default RouterApp;
