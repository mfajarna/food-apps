import { createSlice } from '@reduxjs/toolkit';

type initType =  {
    isLoading: boolean
}

const initGlobalState: initType = {
    isLoading: false
}


const GlobalSlice = createSlice({
    name: 'global',
    initialState: initGlobalState,
    reducers:{
    }
})