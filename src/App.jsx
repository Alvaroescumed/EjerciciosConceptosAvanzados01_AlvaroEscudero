import { useState, lazy } from 'react'
import './App.css'
import ShowServerCofig from './components/ShowServerCofig';

const MiContador = lazy( () => import('./components/MiContador'));


function App() {

  const serverConfig = {
    minConnection: 10,
    maxConnection: 100,
    restartAlways: true,
    environment: 'live',
    SSL: true
};


  return (
    <>
      <MiContador />
      <ShowServerCofig config={serverConfig}/>
    </>
  )
}

export default App
