import { configureStore } from "@reduxjs/toolkit";
import MyProductReducers from '../toolkit/MyProductSlice';
import MyCartReducers from '../toolkit/MyCartSlice'
import MyProductDrinksReducers from '../toolkit/MyProductDrinkSlice'

export const mystore = configureStore({
    reducer:{
        product: MyProductReducers,
        cart: MyCartReducers,
        drink: MyProductDrinksReducers,
    }
});