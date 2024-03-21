import { useEffect, useState } from "react";

export default function useFetch(url){ // traemos como prop la url de la api a fetchear
    const[data, setData] = useState([]);
    const[loading, setLoading] = useState(true);

    useEffect(()=>{
        setLoading(true);

        fetch(url)
        .then(response => response.json())
        .then(data => {
                        setData(data)
                        setLoading(false)});
    },[])

    return {data , loading};
}