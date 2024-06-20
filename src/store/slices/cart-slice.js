// create slice
// initialize intial state
// slice ->  name , mention initials state , actions

import {createSlice} from '@reduxjs/toolkit';

const initialState = [] //2nd step kyuki cart mein ek se jyada elements rahenge

const cartSlice = createSlice({
    name : 'cart',  //event name
    initialState ,
    reducers : { //reducers are basically a object which contains actions  
        addToCart(state , action){  //jab kabhi event call hoga udhar se tab ----> hamesha do cheez aati hai [state , action]
            console.log(action);
            state.push(action.payload)
        },
        removeFromCart(state , action){
            console.log(action)
            return state.filter(item => item.id !== action.payload) 
        }
    }   
})

export const {addToCart , removeFromCart} = cartSlice.actions
export default cartSlice.reducer;