import { useState, lazy } from 'react'
import './App.css'
import ShowServerCofig from './components/ShowServerCofig';
import ShoppingCart from './components/ShoppingCart';
import useFetch from './hooks/useFetchs';

const MiContador = lazy( () => import('./components/MiContador'));




function App() {

  const {data: products} = useFetch('https://fakestoreapi.com/products');

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
      <ShoppingCart products={products}/>
    </>
  )
}

export default App
