import io from 'socket.io-client';
import { Cookies } from 'react-cookie'

const cookies = new Cookies();


const socket = io('http://localhost:8500', {
  query: {
    token: cookies.get('auth-cookie'), 
  },
});


export default socket;