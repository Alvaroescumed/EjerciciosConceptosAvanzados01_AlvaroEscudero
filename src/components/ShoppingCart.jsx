import { useState } from "react";

export default function ShoppingCart ({products}){ //añadimos los productos por props
    
    const [cart, setCart] = useState({});
    const [price, setPrice] = useState(0);
    const [error, setError] =useState(false)

    function addProduct(name, price){

        // añadir productos al carrito
        const newProduct = {name, price};
        setCart([... cart, newProduct]);

    }

    function deleteProduct(name){
        // quitar productos del carrito
        
    }

    function showTotal(){
        // ver precio total del carrito
        setPrice()

    }

    function addCode(e){
        // canjear cupon : SAVE10 que restará un 10% al precio total. // mostrar error si el codigo es erroneo
        const code = e.target.value

        if(code === "SAVE10"){
            setPrice(prevPrice => prevPrice*0.9); 
            setError(true);
        }

    }

    //EXTRA guardar los datos

}