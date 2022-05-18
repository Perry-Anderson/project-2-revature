import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

export const Products: React.FC<any> = () => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState ([]);

    useEffect(() => {
        setLoading(true);
        axios({
            method:"GET",
            url: "https://fakestoreapi.com/products"
            //when the promise is finished do the then statement
            //like an if then.
        }).then(res=> {
            console.log();
            setData(res.data)

        }).catch(e=>console.log(e))
        .finally(()=> setLoading(false));


    },[])




    return (
        <div className="products-container">Products
        
        
        
        
        
        {data.map((product)=> (
            <div key={product.id} className="card">
            <div><img src={product.image} alt="#"/></div> 
            <div className="card-description">
            <h6>{product.title}</h6>
            <h6>{`Price: ${product.price}`}</h6>
            <h6>{`Category: ${product.categroy}`}</h6>
            
            </div>
            </div>
        ))}
        </div> 

    


    );
};



