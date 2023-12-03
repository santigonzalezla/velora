import {Routes, Route} from 'react-router-dom'
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
import ClientProtectedRoute from '../utils/clientProtectedRoute';
import ArtistComments from "../components/ArtistComments/ArtistComments.jsx";

const home = () => {
    return (
        <ClientProtectedRoute>
            <HomeApp/>
        </ClientProtectedRoute>
    )
}

const homeArtist = () =>
{
    return (
        <ClientProtectedRoute>
            <HomeApp/>
        </ClientProtectedRoute>
    )
}

const chats = () =>
{
    return (
        <ClientProtectedRoute>
            <Chats/>
        </ClientProtectedRoute>
    )
}

const subscriptions = () =>
{
    return (
        <ClientProtectedRoute>
            <Subscriptions/>
        </ClientProtectedRoute>
    )
}

const billing = () =>
{
    return (
        <ClientProtectedRoute>
            <Billing/>
        </ClientProtectedRoute>
    )
}

const videoCall = () =>
{
    return (
        <ClientProtectedRoute>
            <VideoCall/>
        </ClientProtectedRoute>
    )
}

const artistApp = () =>
{
    return (
        <ClientProtectedRoute>
            <ArtistApp/>
        </ClientProtectedRoute>
    )
}

const artistChats = () =>
{
    return (
        <ClientProtectedRoute>
            <ArtstChats/>
        </ClientProtectedRoute>
    )
}

const artistProfile = () =>
{
    return (
        <ClientProtectedRoute>
            <ArtistPorfile/>
        </ClientProtectedRoute>
    )
}

const clientProfile = () =>
{
    return (
        <ClientProtectedRoute>
            <ClientPorfile/>
        </ClientProtectedRoute>
    )
}

const artistDashboard = () =>
{
    return (
        /*
        <ClientProtectedRoute>
        </ClientProtectedRoute>
        */
        <ArtistDashboard/>
    )
}

const artisComments = () =>
{
    return (
        <ClientProtectedRoute>
            <ArtistComments />
        </ClientProtectedRoute>
    )
}

const videoCallArtist = () =>
{
    return (
        <ClientProtectedRoute>
            <VideoCallArtist/>
        </ClientProtectedRoute>
    )
}

const livesArtist = () =>
{
    return (
        <ClientProtectedRoute>
            <LivesArtist/>
        </ClientProtectedRoute>
    )
}

const billingArtist = () =>
{
    return (
        <ClientProtectedRoute>
            <BillingArtist/>
        </ClientProtectedRoute>
    )
}

const viewArtist = () =>
{
    return (
        <ClientProtectedRoute>
            <ViewArtist/>
        </ClientProtectedRoute>
    )
}

const lives = () =>
{
    return (
        <ClientProtectedRoute>
            <Lives/>
        </ClientProtectedRoute>
    )
}

const buyCoins = () =>
{
    return (
        <ClientProtectedRoute>
            <BuyCoins/>
        </ClientProtectedRoute>
    )
}

const RouterApp = () =>
{
    return (
        <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/Client' element={<Client/>}/>
            <Route path='/Artist' element={<Artist/>}/>
            <Route path='/Company' element={<Company/>}/>
            <Route path='/Terms' element={<Terms/>}/>
            <Route path='/Help' element={<Help/>}/>
            {/*-------------------------------------------------*/}
            <Route path='/ArtistHome' element={home()}/>
            <Route path='/ArtistApp' element={artistApp()}/>
            <Route path='/ArtstChats' element={artistChats()}/>
            <Route path='/ArtistProfile' element={artistProfile()}/>
            <Route path='/UserReviews/:user' element={clientProfile()}/>
            <Route path='/ArtistDashboard' element={artistDashboard()}/>
            <Route path='/ArtistComments' element={artisComments()}/>
            <Route path='/VideoCallArtist' element={videoCallArtist()}/>
            <Route path='/LivesArtist' element={livesArtist()}/>
            <Route path='/BillingArtist' element={billingArtist()}/>
            <Route path='/home' element={home()}/>
            <Route path='/ViewArtist/:artist' element={viewArtist()}/>
            {/* <Route path='/ViewArtist' element={<ViewArtist />} /> */}
            <Route path='/Chats' element={chats()}/>
            <Route path='/Lives' element={lives()}/>
            <Route path='/Subscriptions' element={subscriptions()}/>
            <Route path='/Billing' element={billing()}/>
            <Route path='/VideoCall' element={videoCall()}/>
            <Route path='/BuyCoins' element={buyCoins()}/>
        </Routes>
    );
}

export default RouterApp;
