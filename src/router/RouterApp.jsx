import { Routes, Route } from 'react-router-dom'
import Landing from '../view/Landing'
import Client from '../components/Client/Client';
import Artist from '../components/Artist/Artist'
import Company from '../components/Company/Company'
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
import BillingArtist from '../components/ArtistApp/BillingArtist';
import ArtistDashboard from '../components/ArtistApp/ArtistDashboard'
import VideoCallArtist from '../components/ArtistApp/VideoCallArtist';
import LivesArtist from '../components/ArtistApp/LivesArtist';
import CompanyApp from '../components/CompanyApp/CompanyApp';
import CompanyChats from '../components/CompanyApp/CompanyChats';
import ArtistCompany from '../components/CompanyApp/ArtistCompany'
import BillingCompany from '../components/CompanyApp/BillingCompany';

const RouterApp = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/Client' element={<Client />} />
      <Route path='/Artist' element={<Artist />} />
      <Route path='/Company' element={<Company />} />
      <Route path='/Home' element={<HomeApp />} />
      <Route path='/Terms' element={<Terms />} />
      <Route path='/Help' element={<Help />} />
      <Route path='/ViewArtist' element={<ViewArtist />} />
      <Route path='/Chats' element={<Chats />} />
      <Route path='/Lives' element={<Lives />} />
      <Route path='/Subscriptions' element={<Subscriptions />} />
      <Route path='/Billing' element={<Billing />} />
      <Route path='/VideoCall' element={<VideoCall />} />
      <Route path='/ArtistApp' element={<ArtistApp />} />
      <Route path='/ArtstChats' element={<ArtstChats />} />
      <Route path='/ArtistPorfile' element={<ArtistPorfile />} />
      <Route path='/ClientPorfile' element={<ClientPorfile />} />
      <Route path='/ArtistDashboard' element={<ArtistDashboard />} />
      <Route path='/VideoCallArtist' element={<VideoCallArtist />} />
      <Route path='/LivesArtist' element={<LivesArtist />} />
      <Route path='/BillingArtist' element={<BillingArtist />} />
      <Route path='/CompanyApp' element={<CompanyApp />} />
      <Route path='/CompanyChats' element={<CompanyChats />} />
      <Route path='/ArtistCompany' element={<ArtistCompany />} />
      <Route path='/BillingCompany' element={<BillingCompany />} />
    </Routes>
  );
}

export default RouterApp;
