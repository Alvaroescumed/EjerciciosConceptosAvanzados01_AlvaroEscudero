import { useState, lazy } from 'react'
import './App.css'
import ShowServerCofig from './components/ShowServerCofig';
import ShoppingCart from './components/ShoppingCart';
import useFetch from './hooks/useFetchs';

const MiContador = lazy( () => import('./components/MiContador'));




function App() {

 /*  const {data: productsList} = useFetch('https://dummyjson.com/products'); */
 const productsList = [
  { id: 1, title: "Camisa", price: 25.99 },
  { id: 2, title: "Pantalón", price: 39.99 },
  { id: 3, title: "Zapatos", price: 49.99 },
  { id: 4, title: "Sombrero", price: 14.99 },
  { id: 5, title: "Bufanda", price: 9.99 }
];

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
      <ShoppingCart products={productsList}/>
    </>
  )
}

export default App
