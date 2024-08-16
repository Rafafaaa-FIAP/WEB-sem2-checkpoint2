import { Outlet, useNavigate } from 'react-router-dom'

import Nav from './components/Nav'
import Footer from './components/Footer'
import { useEffect } from 'react';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/home');
  }, [])

  return (
    <div id='app-page'>
      <Nav />
      <div id="main">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
