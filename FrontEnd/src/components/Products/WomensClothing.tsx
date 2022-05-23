import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addNewItem} from "../../actions/NewItem"
import axios from 'axios'
import "./Products.css"
import { nItem } from '../../store/types'
import { AppState } from '../../store/types'
import {Navbar, Nav,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const WomensClothing: React.FC<any> = (post:any) => {
    //instantiating a new dispatch object so we can send data to the database.
    let dispatch = useDispatch();

    const appState = useSelector<any, any>((state) => state);

    const [loading, setLoading] = useState(false);
    //When constructing set data, and doing a useState for data coming in an array
    //make sure that the useState is ALSO in an array with ANY type of data to go into it.
    const [data, setData] = useState<any[]>([])
    const [uuid, setUUID] = useState<any>()

    let newItem: nItem = {
        user_id: "",
        product_id: "",
        title: "",
        price: "",
        description: "",
        category: "",
        image: "",
     }
    
    useEffect(() => {
        setLoading(true);
        axios({
            method:"GET",
            url: "https://fakestoreapi.com/products/category/women's clothing"
            //when the promise is finished do the then statement
            //like an if then.
        }).then(res=> {
            console.log();
            setData(res.data)
            //the setState setData is setting the state of res being put into the function and the data grabbed from the axios call of the url using the GET method.


        }).catch(e=>console.log(e))
        .finally(()=> setLoading(false));
        //catching if an error appears via logging the error e, and then loading will be set to false and the url will NOT be grabbed.

    },[appState])
    let getUUID = () => {
        setUUID("");
        setLoading(true);

        axios({
            method:"GET",
            url: "https://www.uuidgenerator.net/api/guid"
            //when the promise is finished do the then statement
            //like an if then.
        }).then(res=> {
            
            setUUID(res.data)
            
            //the setState setData is setting the state of res being put into the function and the data grabbed from the axios call of the url using the GET method.


        }).catch(e=>console.log(e))
        .finally(()=> setLoading(false));
        //catching if an error appears via logging the error e, and then loading will be set to false and the url will NOT be grabbed.
       
    }
    console.log(uuid);
    console.log("Hello friends")

    
    const navigate = useNavigate();

    //when user updates the username/password field, this function is called
    //when user updates the values whichever is being updated changes
    //this is how we can send a username/password object to the CreateUser Action
   // let productIDgenerator = randomInt(248);

    
    const setProductValues =async (product_id: any, productImage: any, productTitle: any, productPrice: any, productCategory: any, productdescription: any) => {
       
        newItem = {
            user_id: appState.user.id,
            product_id: uuid,
            title: productTitle,
            price: productPrice,
            description: productdescription,
            category: productCategory,
            image: productImage
        }
    await dispatch(

        addNewItem(newItem) as any
        //these are the states that were changed with handleChange
        //we need "as any" to make it so that the return type can be any type
        
        )

   }


   //when creating the logout function using the AppState created above, you NEED a lambda function
   let logout = () => {
    appState.user.id = 0
    navigate("/")
   }
   let Electronics = () => {
    navigate("/Electronics")
   }
   let Jewelery = () => {
    navigate("/Jewelery")
   }
   let MensClothing = () => {
    navigate("/MensClothing")
   }
   let WomensClothing = () => {
    navigate("/WomensClothing")
   }
   let products = () => {
    navigate("/Products")
   }

   let wishlist = () => {
    navigate ("/viewwishlist")
}
   
return (
    <>
<Navbar variant="dark">
   <Container>
   <Nav className="me-auto">

   <ul>
   <li> <Navbar.Brand href="#home">Wish</Navbar.Brand></li>
   <li><Nav.Link as = {Link} to="/products" >All Products</Nav.Link></li>
   <li><Nav.Link as = {Link} to="/Electronics" >Electronics</Nav.Link></li>
   <li><Nav.Link as = {Link} to="/Jewelery" >Jewelry</Nav.Link></li>
   <li><Nav.Link as = {Link} to="/MensClothing" >Men's Clothing</Nav.Link></li>
   <li><Nav.Link as = {Link} to="/WomensClothing" >Women's Clothing</Nav.Link></li>
   <li><Nav.Link as = {Link} to="/viewwishlist" >Go To WishList</Nav.Link></li>
   <li><Nav.Link as = {Link} to="/">
       
       <span onClick={logout}>Log Out </span>
       </Nav.Link></li>
   </ul>
        </Nav>
        </Container>
        </Navbar>

        <div className = "background">
        <div className="products-container">
              {data.map((product)=> (

         <div key={product.id} className="card">
         <div><img src={product.image} alt="#"/></div> 
         <div className="card-description">
         <h6>{product.title}</h6>
         <h6>{`Price: ${product.price}`}</h6>
         <h6>{`Category: ${product.category}`}</h6>
         <div className="addToWishList">
         <button className = "addToWishList" onClick={() => {setProductValues(product.id, product.image, product.title, product.price, product.category, product.description); getUUID();}}>Add to Wishlist</button>
         </div>
         </div>
         </div>

     ))} 
        </div>
        </div>

         </>
 );
};




