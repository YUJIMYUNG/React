import { createSlice } from "@reduxjs/toolkit"

const initState = {
    carItems : [

    ]
}

const cartSlice = createSlice({
    name:"cart",
    initState,
    reducers:{

    }
})

export default cartSlice.reducer;