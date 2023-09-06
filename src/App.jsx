{/* Main Entry Point of the app  */ }
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import RouterApp from './router/RouterApp';
import Home from './components/Home/Home';

function App() {

  const [test, setTest] = useState(false)
  const handleSignIn = () => {
    setTest(!test)
  }
  return (
    <>
      <Home handleSignIn={handleSignIn} />
      
    </>
  )
}

export default App
