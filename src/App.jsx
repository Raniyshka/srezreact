import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Home} from './pages/Home/Home'
import {Route, Routes} from 'react-router-dom'
import { Catalog } from './pages/Catalog/Catalog';
import { Header } from './components/Header/Header';
import { Product } from './pages/Product/Product';


function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/catalog' element={<Catalog/>}/>
        <Route path='/catalog/:id' element={<Product/>}/>
      </Routes>

    </>
  )
}

export default App
