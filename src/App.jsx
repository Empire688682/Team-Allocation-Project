import React from 'react';
import Header from './Component/header';
import Employees from './Component/Employee'
import Footer from './Component/footer';
import './Component/content.css'
import './App.css'

const App = () => {
  return (
    <div className='app-content'>
      <Header/>
      <Employees/>
      <Footer/>
    </div>
  )
}

export default App
