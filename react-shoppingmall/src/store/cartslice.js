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
        },
        increaseCount(state, action){
             const idToIncrease = action.payload;
             const item = state.cartItems.find(item => item.id === idToIncrease.id);
             if(item){
                item.count++;
             }
        },
        decreaseCount(state, action){
            const idToIncrease = action.payload;
             const item = state.cartItems.find(item => item.id === idToIncrease.id);
             if(item){
                item.count--;
                if(item.count <= 0){
                    item.count = 0;
                }
             }
        },
        delToCart(state, action){
            const selected = action.payload;
            return{
                 ...state,
                 cartItems : state.cartItems.filter(item => item.id !== selected)
            }
        }
    }
})

export const {addToCart, increaseCount, decreaseCount, delToCart}  = cartSlice.actions;
export default cartSlice.reducer;