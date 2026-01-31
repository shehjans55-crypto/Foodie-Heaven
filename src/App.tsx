import { Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import AboutUs from './Pages/AboutUs'
import Navbar from './Pages/Navbar'
import Footer from './Pages/Footer'
import Menu from './Pages/Menu'


function App() {

  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
       <Route path="/contact" element={<Contact/>}/>
       <Route path="/About" element={<AboutUs/>}/>
       <Route path="/Menu" element={<Menu/>}/>
    </Routes>
    <Footer/>
    </div> 

  )
}

export default App
