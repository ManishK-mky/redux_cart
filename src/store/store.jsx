// store part in redux is basically for the wrapping around the app part in main.jsx so that it can be used by every component

// combining all slices

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cart-slice'

//if there are more than one reducer
// import dummyReducer from './slices/dummy-reducer'

const store = configureStore({
    reducer : {  //event-name ---> cart
        cart : cartReducer,//isme cartReducer cart mein store hai ---> isluye humko jabhi cart ko use karna haoga tab huum (state => state.cart) likhenge
        // dummy : dummyReducer
    }
})

export default store;