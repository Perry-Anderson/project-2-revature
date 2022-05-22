import axios from "axios";
 import { nItem } from "../store/types";
 import { ADD_ITEM } from "./actionTypes";
import{ Login}  from "../components/Login/Login";
import { AppState } from "../store/types";
import { useSelector } from "react-redux";

 interface addItem {
    user_id: string,
    id: string,
    title: string,
    price: string,
    description: string,
    category: string,
    image: string,
    
}

//newuser functionality
export const addNewItem = (addItemCreds:addItem) => async (dispatch:any) => {
    //create an empty object of type nItem - this will get filled on success
    let newItem: nItem;

    try {
        //send my HTTP request with axios, and put it into a variable we can use
        const response = await axios.post('http://localhost:5500/addnewitem', addItemCreds);

        if(response.status === 202) { //if the login was successful...
            
            //populate our loggedInUser variable
            console.log(addItemCreds.user_id)
            addItemCreds = {
                user_id: response.data.user.id,
                id: response.data.id,
                title: response.data.title,
                price: response.data.price,
                description: response.data.description,
                category: response.data.category,
                image: response.data.image
            }

            //now we actually DISPATCH (send) this data to the store
            //notice in the reducers, this is the type of data we need for the Action object
            return dispatch({
                type: ADD_ITEM,
                payload: addItemCreds
            })

        }

    } catch (e) {
        console.log("LOGIN FAILED!")
    }

}