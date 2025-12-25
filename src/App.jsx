import './App.css'
import Navbar from './components/Navbar.jsx'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Menu from './components/Menu.jsx'
import Reservations from './components/Reservations.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main className="bg-[#0B0A0E] min-h-screen">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/menu' element={<Menu />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/reservations' element={<Reservations />}/>
        </Routes>
      </main>
    </>
  )
}

export default App
