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
import HomeApp from '../components/HomeApp/HomeApp'
import ViewArtist from '../components/ViewArtist/ViewArtist';
import Chats from '../components/Chats/Chats'
import Lives from '../components/Lives/Lives';
import Subscriptions from '../components/Subscriptions/Subscriptions';
import Billing from '../components/Billing/Billing';
import VideoCall from '../components/VideoCall/VideoCall';
import BuyCoins from '../components/BuyCoins/BuyCoins';
// import ClientProtectedRoute from '../utils/clientProtectedRoute';

// const home = () => {
//   return (
//     <ClientProtectedRoute>
//       <HomeApp />
//     </ClientProtectedRoute>
//   )
// }

// const chats = () => {
//   return (
//     <ClientProtectedRoute>
//       <Chats />
//     </ClientProtectedRoute>
//   )
// }

// const subscriptions = () => {
//   return (
//     <ClientProtectedRoute>
//       <Subscriptions />
//     </ClientProtectedRoute>
//   )
// }

// const billing = () => {
//   return (
//     <ClientProtectedRoute>
//       <Billing />
//     </ClientProtectedRoute>
//   )
// }

// const videoCall = () => {
//   return (
//     <ClientProtectedRoute>
//       <VideoCall />
//     </ClientProtectedRoute>
//   )
// }


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
      <Route path='/home' element={<HomeApp />}/*element={home()}*/ />
      <Route path='/ViewArtist' element={<ViewArtist />} />
      <Route path='/Chats' element={<Chats />}/*element={chats()}*/ />
      <Route path='/Lives' element={<Lives />} />
      <Route path='/Subscriptions' element={<Subscriptions />}/*element={subscriptions()} */ />
      <Route path='/Billing' element={<Billing />}/*element={billing()}*/ />
      <Route path='/VideoCall' element={<VideoCall />}/* element={videoCall()}*/ />
      <Route path='/BuyCoins' element={<BuyCoins />} />
    </Routes>
  );
}

export default RouterApp;
