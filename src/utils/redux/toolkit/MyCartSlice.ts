import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const MyCartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers:{
        addToCart(state, action) {
            let myIndex = -1;
            state.map((item, index) => {
                if(item.id == action.payload.id){
                    myIndex = index
                }
            });

            if(myIndex == -1){
                state.push({
                    id: action.payload.id,
                    nama: action.payload.nama,
                    harga: action.payload.harga ,
                    qty: action.payload.qty + 1,
                    img: action.payload.img
                })
            }else{
                state[myIndex].qty= state[myIndex].qty + 1;
             }
            
        },

        removeCart(state, action){
            let myIndex = -1;
            state.map((item, index) => {
                if(item.id == action.payload.id){
                    myIndex = index
                }
            });
            if(myIndex == -1){

            } else {
                state[myIndex].qty = state[myIndex].qty -1;
            }
        },

        deleteCart(state, action){
            return (state = state.filter(item => item.id !== action.payload)
            )
        },
        deleteAllCart(state, action){
            return state = [];
        }
    }
})



export const {addToCart, removeCart, deleteCart, deleteAllCart} = MyCartSlice.actions;
export default MyCartSlice.reducer;