import React from 'react';
import Router from 'react-router-dom'
import Header from './components/Header/Header';
import HeaderDashboard from './components/Header/HeaderDashboard';
import Main from './components/Main';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard/Dashboard'
import { Switch, Route } from 'react-router-dom';




function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />


    </>
  )
}

export default App;
