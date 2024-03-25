import { useEffect, useState } from "react";

export default function ShoppingCart ({products}){ //añadimos los productos por props

    const [cart, setCart] = useState([]);
    const [price, setPrice] = useState(0);
    const [error, setError] = useState(false);

    useEffect(()=>{
        cart.forEach( product =>{
            setPrice(prevPrice => prevPrice + product.price)
        })
    }, [cart])

  function addProduct(name, price, id){  
        // añadir productos al carrito

        const existingProduct = cart.findIndex(product => product.id === id); //buscamos el id del producto a añadir por si acaso ya se ha añadido con anterioridad
        
        if(existingProduct !== -1){
            const update = [...cart];
            update[existingProduct].quantity += 1;
            setCart(update);
        } else{
            const newProduct = {id: id ,name : name, price: price, quantity: 1};
        
            setCart([... cart, newProduct]);
    
        }
       
    }

    function deleteProduct(id){
        // quitar productos del carrito

        const deletedProduct = cart.find(product => product.id === id);

        setPrice(prevPrice => prevPrice - deletedProduct.price * deleteProduct.quantity);

        setCart(cart.filter(product => product.id !== id));
        
    }

    function addCode(e){
        // canjear cupon : SAVE10 que restará un 10% al precio total. // mostrar error si el codigo es erroneo
        const code = e.target.value

        if(code === "SAVE10"){
            setPrice(prevPrice => prevPrice*0.9); 
            setError(false);
        } else{
            setError(true);
        }

    }

    //EXTRA guardar los datos

    return (
    <>
        <div>
            <h2>Lista de productos</h2>
           <ul>
            {products.map(product => (
                <li key={product.id}>{product.title} {product.price} <button onClick={() => addProduct(product.title, product.price, product.id)}>Add to cart🛒</button></li> 
                
            ))}
           </ul>
        </div>
      <div>
            <h2>Lista de la compra</h2>
             <ul>
                { cart && cart.map(i => (
                    <li key={i.id}>
                        {i.name} {i.price}€ x{i.quantity}
                        <button onClick={() => deleteProduct(i.id)}>Remove ❌</button>
                    </li>
                ))}
            </ul>
           <p>TOTAL: {price} €</p>
           <input type="text" onChange={addCode} placeholder="Código de Promoción"></input>
           { error && <p >El codigo introducido no es valido</p> }
        </div>
    </>
    )

}