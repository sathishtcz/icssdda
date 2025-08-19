import { ToastContainer, Zoom } from 'react-toastify'
import './App.css'
import Approuter from './router/Approuter'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    Aos.init({
      duration: 800,
      once: false,
      mirror: true
    });
  }, []);

  return (
    <>
      <Approuter />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        transition={Zoom} />
    </>
  )
}

export default App
