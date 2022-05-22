import axios from "axios";
 import { dItem } from "../store/types"
 import { REMOVE_ITEM } from "./actionTypes";
import{ Login}  from "../components/Login/Login"
import { AppState } from "../store/types";
import { useSelector } from "react-redux";

 interface deleteItem {
    id: string,
    user_id: string
}



//deleteitem functionality
export const deleteItem = (deleteItemCreds:deleteItem) => async (dispatch:any) => {
    
    let deleteItem: dItem;

    try {
        //send my HTTP request with axios, and put it into a variable we can use
        const response = await axios.delete('http://localhost:5000/deleteitem/'+ deleteItemCreds.user_id +'/' + deleteItemCreds.id );


        if(response.status === 202) { //if the login was successful...
            
            console.log(response)
            //populate our loggedInUser variable

            //now we actually DISPATCH (send) this data to the store
            //notice in the reducers, this is the type of data we need for the Action object
            return dispatch({
                type: REMOVE_ITEM,
                payload: deleteItemCreds
            })

        }

    } catch (e) {
        console.log("LOGIN FAILED!")
    }

}