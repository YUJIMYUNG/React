import { configureStore, createSlice } from "@reduxjs/toolkit";
import product from "../data";

let slice1 = createSlice({
    name: "이름",
    initialState : "초기값",
    reducers : {
        changeData(state, action){
            //state : 바뀌기 전 값
            //action.payload : 바꾸고자 하는 값 
            return '슬라이스 변경' + state + action.payload;
        }
    }
})

let slice2 = createSlice({
    name : 'product',
    initialState : product,
    reducers:{

    }
})

export let {changeData} = slice1.actions;

export default configureStore({
    reducer:{
        slice1 : slice1.reducer,
        slice2 : slice2.reducer
    }
})