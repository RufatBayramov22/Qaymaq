import React from 'react'
import { Route,Routes } from 'react-router-dom'
//pages
import Header from './pages/Header'
import Footer from "./pages/Footer"
import NotFound from "./pages/NotFound"
//components
import Blog from './components/Blog'
import Products from './components/Products'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

//context 
import { AppContext } from './utils/MainContext'





const App = () => {
  return (
    <AppContext>
    
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </AppContext>
  )
}

export default App