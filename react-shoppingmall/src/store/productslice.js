import { createSlice } from "@reduxjs/toolkit";

const initialState ={

    
    
    products: [
        {   
            id : 1,
            productName: "스트릿 스프레이 루즈핏 반팔티 5color",
            category: "상의",
            price: 25500,
            color: ["화이트", "베이지", "라이트퍼플", "차콜", "블랙"],
            size: ["free"],
            src: process.env.PUBLIC_URL + "/img/스트릿 스프레이 루즈핏 반팔티 5color.jpg",
            count : 0
        },
        {   
            id : 2,
            productName: "아이스 쿨 무지 반팔티 2color",
            category: "상의",
            price: 32500,
            color: ["화이트", "블랙"],
            size: ["S/M", "L/XL", "2XL/3XL", "4XL/5XL"],
            src: process.env.PUBLIC_URL + "/img/아이스 쿨 무지 반팔티 2color.jpg",
            count : 0
        },
        {
            id : 3,
            productName: "브이앤 나일론 반바지 2color",
            category: "하의",
            price: 37000,
            color: ["스카이블루", "블랙"],
            size: ["S/M", "L/XL", "2XL/3XL", "4XL/5XL"],
            src: process.env.PUBLIC_URL + "/img/브이앤 나일론 반바지 2color.jpg",
            count : 0
        },{
            id : 4,
            productName : "레이던 오버핏 롱 야상 점퍼",
            price : 64800,
            category : "아우터",
            color : ["카키", "블랙"],
            size : ["free"],
            src: process.env.PUBLIC_URL + "/img/레이던 오버핏 롱 야상 점퍼.jpg",
            count : 0
        }
    ],
    searchQuery : ""
}

const producSlice = createSlice({
    name : "products",
    initialState,
    reducers : {

    }
})

export default producSlice.reducer;