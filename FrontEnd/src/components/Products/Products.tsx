import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addNewItem} from "../../actions/NewItem"
import axios from 'axios'
import "./Products.css"

export const Products: React.FC<any> = () => {

    const [loading, setLoading] = useState(false);
    //When constructing set data, and doing a useState for data coming in an array
    //make sure that the useState is ALSO in an array with ANY type of data to go into it.
    const [data, setData] = useState<any[]>([])

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
            //the setState setData is setting the state of res being put into the function and the data grabbed from the axios call of the url using the GET method.


        }).catch(e=>console.log(e))
        .finally(()=> setLoading(false));
        //catching if an error appears via logging the error e, and then loading will be set to false and the url will NOT be grabbed.

    },[])


    // const addItem = async () => {
    //     await dispatch(
    //         //addNewItem needs to be added to actions and then imported 
    //         addNewItem({id, title, price, description, category, image}) as any
    //         //these are the states that were changed with handleChange
    //         //we need "as any" to make it so that the return type can be any type
    //     )
    // }


    //useState hooks to declare a state object, a mutator (which changed state), and a default value
    let [id, setID] = useState('');
    let [title, setTitle] = useState('');
    let [price, setPrice] = useState ('');
    let [description, setDescription] = useState ('');
    let [category, setCategory] = useState ('');
    let [image, setImage] = useState ('');
    //we'll use this object to switch components whenever appropriate
    //this is what lets us navigate through the application through button clicks, etc.
    const navigate = useNavigate();

    //when user updates the username/password field, this function is called
    //when user updates the values whichever is being updated changes
    //this is how we can send a username/password object to the CreateUser Action
    
    const gatherItemData = (e:any) => {
        // if(e.target.name === "username"){ //if the input is name=username...
        //     setID(e.target.value) //set username to be the value that was inserted
        // } else if (e.target.name === "password"){
        //     setTitle(e.target.value)
        // } else if (e.target.name === "firstname"){
        //     setPrice(e.target.value)
        // } else if (e.target.name === "lastname"){
        //     setDescription(e.target.value)}
        // else if (e.target.name === "lastname"){
        //         setCategory(e.target.value)
        // }else {
        //         setImage(e.target.value)
        // }

      

    }

    useEffect(() => {        

        let finalSizeArray = data.map(option => {
            let sizeInfo = {}

            sizeInfo.key = option.id
            sizeInfo.text = option.description
            sizeInfo.value = option.price
            

            return sizeInfo
        })

        setSizes(finalSizeArray)
    }, [])


    return (
       <>
       <div className = "background">
       <div className="Navigation bar">
       <button> Go To wishlist</button><button>Log Out</button>
       </div>
        <div className = "banner-image"></div>
       <div className="products-container">

        
        
        
        
        {data.map((product)=> (
            
            <div key={product.id} className="card">
            <div><img src={product.image} alt="#"/></div> 
            <div className="card-description">
            <h6>{product.title}</h6>
            <h6>{`Price: ${product.price}`}</h6>
            <h6>{`Category: ${product.category}`}</h6>
            <button className = "addToWishList" onClick={gatherItemData}>Add to Wishlist</button>
            
            </div>
            </div>
        ))} 
        </div> 
        </div>
    
            </>
    );
};




