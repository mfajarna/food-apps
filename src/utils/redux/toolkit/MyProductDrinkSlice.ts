import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const MyProductDrinkSlice = createSlice({
    name: 'productDrink',
    initialState: [],
    reducers:{
        addMyProductDrinks: (state, action) => {
            state.push(action.payload)
        },
        increaseQtyDrinks: (state, action) => {
            let myIndex = -1;

            state.map((item, index) => {
                if(item.id == action.payload){
                    myIndex = index
                }
            })

            if(myIndex == -1){
            } else {
                state[myIndex].qty = state[myIndex].qty + 1;
            }
        },
        decreaseQtyDrinks: (state, action) => {
            let myIndex = -1;

            state.map((item, index) => {
                if(item.id == action.payload){
                    myIndex = index
                }
            })

            if(myIndex == -1){
            } else {
                state[myIndex].qty = state[myIndex].qty - 1;
            }
        },
        resetDataDrinks: (state, action) => {
            state.forEach(obj => {
                obj.qty = 0;
            })

            return state;
        }
    }
})



export const {addMyProductDrinks, increaseQtyDrinks, decreaseQtyDrinks, resetDataDrinks} = MyProductDrinkSlice.actions;
export default MyProductDrinkSlice.reducer;