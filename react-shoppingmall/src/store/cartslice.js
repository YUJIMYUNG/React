import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItems : [

    ]
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        //state 기존 값 -> 바뀌기 전 값
        //action 바꾸고자 하는 값 
        addToCart(state, action){
            const newItem = action.payload;
            const existionItem = state.cartItems.find(item => item.id === newItem.id);
            if(existionItem){
                console.log("이미 존재함");
                return "이미 존재함";
            }else{
                state.cartItems.push(newItem);
                console.log("추가 되었음");
            }
        }
    }
})

export const {addToCart}  = cartSlice.actions;
export default cartSlice.reducer;