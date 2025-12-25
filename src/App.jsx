import './App.css'
import Navbar from './components/Navbar.jsx'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Menu from './components/Menu.jsx'
import Reservations from './components/Reservations.jsx'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/menu' element={<Menu />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/reservations' element={<Reservations />}/>
      </Routes>
    </div>
  )
}

export default App
