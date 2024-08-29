import { useState } from 'react'

import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import NavBar from './assets/Components/Nav/NavBar'
import Footer from './assets/Components/Nav/footer'
import Inicio from './assets/Components/Pagination/Inicio'
import Productos from './assets/Components/Pagination/Productos'
import Contacto from './assets/Components/Pagination/Contacto'
import Nosotros from './assets/Components/Pagination/Nosotros'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='dark:bg-black bg-white overflow-x-hidden'>
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/nosotros' element={<Nosotros />} />
      </Routes>
      <Footer/>
    </HashRouter>
    </div>

  )
}

export default App
