import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const MyProductSlice = createSlice({
    name: 'product',
    initialState: [],
    reducers:{
        addMyProducts: (state, action) => {
            state.push(action.payload)
        },
        increaseQty: (state, action) => {
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
        decreaseQty: (state, action) => {
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
        resetData: (state, action) => {
            state.forEach(obj => {
                obj.qty = 0;
            })

            return state;
        }
    }
})



export const {addMyProducts, increaseQty, decreaseQty, resetData} = MyProductSlice.actions;
export default MyProductSlice.reducer;