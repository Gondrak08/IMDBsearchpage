import React from 'react';
import Routes from './Routes'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


import Header from './components/Header'

function App() {
  return (
    <> 
      <Header/>
      {/* <Search/> */}
      <Routes/>
    </>
  );
}

export default App;
