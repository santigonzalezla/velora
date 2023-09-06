import { Routes, Route } from 'react-router-dom'
import React from 'react'
const Landing = React.lazy(() => import('../view/Landing')) 
const Artist = React.lazy(() => import('../components/Artist/Artist'))
const Client = React.lazy(() => import('../components/Client/Client'))
const Company = React.lazy(() => import('../components/Company/Company'))
const HomeApp = React.lazy(() => import('../components/HomeApp/HomeApp'))
const Terms = React.lazy(() => import('../components/Footer/Terms'))
const Help = React.lazy(() => import('../components/Footer/Help'))
const ViewArtist = React.lazy(() => import('../components/HomeApp/ViewArtist'))
const Chats = React.lazy(() => import('../components/HomeApp/Chats'))
const Lives = React.lazy(() => import('../components/HomeApp/Lives'))
const Subscriptions = React.lazy(() => import('../components/HomeApp/Subscriptions'))
const Billing = React.lazy(() => import('../components/HomeApp/Billing'))
const VideoCall = React.lazy(() => import('../components/HomeApp/VideoCall'))
const ArtistApp = React.lazy(() => import('../components/ArtistApp/ArtistApp'))
const ArtstChats = React.lazy(() => import('../components/ArtistApp/ArtistChats'))
const ArtistPorfile = React.lazy(() => import('../components/ArtistApp/ArtistPorfile'))
const ClientPorfile = React.lazy(() => import('../components/ArtistApp/ClientPorfile'))
const BillingArtist = React.lazy(() => import('../components/ArtistApp/BillingArtist'))
const ArtistDashboard = React.lazy(() => import('../components/ArtistApp/ArtistDashboard'))
const VideoCallArtist = React.lazy(() => import('../components/ArtistApp/VideoCallArtist'))
const LivesArtist = React.lazy(() => import('../components/ArtistApp/LivesArtist'))
const CompanyApp = React.lazy(() => import('../components/CompanyApp/CompanyApp'))
const CompanyChats = React.lazy(() => import('../components/CompanyApp/CompanyChats'))
const ArtistCompany = React.lazy(() => import('../components/CompanyApp/ArtistCompany'))
const BillingCompany = React.lazy(() => import('../components/CompanyApp/BillingCompany'))
const ClientProtectedRoute = React.lazy(() => import('../utils/clientProtectedRoute'))


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
      <Route path='/VideoCallArtist' element={<VideoCallArtist />} />
      <Route path='/LivesArtist' element={<LivesArtist />} />
      <Route path='/BillingArtist' element={<BillingArtist />} />
      <Route path='/CompanyApp' element={<CompanyApp />} />
      <Route path='/CompanyChats' element={<CompanyChats />} />
      <Route path='/ArtistCompany' element={<ArtistCompany />} />
      <Route path='/BillingCompany' element={<BillingCompany />} />
      <Route path="*" element={<Landing />}/>
    </Routes>
  );
}

export default RouterApp;
