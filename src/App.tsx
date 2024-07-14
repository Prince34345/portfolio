import React from 'react'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Skills from './components/Skills'
import Connect from './components/Connect'

const App: React.FC = () => {
  return (
    <Router>
       <Header/>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/project' element={<Project/>}/>
         <Route path='/skills' element={<Skills/>}/>
         <Route path='/connect' element={<Connect/>}/>
       {/* <Footer /> */}
       </Routes>
    </Router>
  )
}

export default App
