import { useState } from "react";

export default function MiContador(){

    const [count , setCount] = useState(0);

    function increment(){


        if(count === 3){

            throw new Error("The counter reach 3");
        }

        setCount(prevCount => prevCount +1 );

    }

    return(
        <>
            <h1>Contador</h1>
            <p>Valor : {count}</p>
            <button onClick={increment}> Increment count 📈 </button>
        </>
    )


}