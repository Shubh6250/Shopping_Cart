import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Cart from './pages/Cart'
import Home from './pages/Home'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/Store'

function App() {
  return (
    <div className='App'>
     <Provider store={store}>

     <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />

        
      </Routes>
      </BrowserRouter>


     </Provider>
    </div>
  )
}

export default App