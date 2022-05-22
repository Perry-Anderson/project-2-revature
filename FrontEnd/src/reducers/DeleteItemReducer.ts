import { REMOVE_ITEM } from "../actions/actionTypes";
import { dItem } from "../store/types";
//reducers are responsible for calculating and sending new state data to the store
//this is the user reducer, which will help us calculate changes in the User

let initialState:dItem = {

    id: "",
    user_id: ""
    
}


//this is an object that will determine what actions to take
type Action = {type:string, payload:any};

//the reducer will take in an IUser object, which is meant to update intialState^
//it will also take in an Action that contains what action to take, and what data it has (payload)
export const DeleteItemReducer = (state:dItem = initialState, action: Action) => {
    //switch based on the type in the Action object
    //look at loginUser in the UserACtions to see where this is coming from
    switch(action.type){
        case REMOVE_ITEM:
            initialState = action.payload
            return {
                ...initialState
            }
        default:
            return state
    }
}