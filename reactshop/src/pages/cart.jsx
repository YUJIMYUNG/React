import { useDispatch, useSelector } from "react-redux";
import './cart.css';
import { useState } from "react";


export default function Cart(){
    let [count, setCount] = useState([1, 1, 1]);

    let product = useSelector((state) => {return state.slice2});
    console.log(product);

    let clickHanlder = (idx)=>{
        let temp = [...count];
        temp[idx]++;
        setCount(temp);
    }

    //사용은 하지 않음
    let dispatch = useDispatch();

    return(
        <div>
            <table style={{border:"1px solid black", borderCollapse:"collapse"}}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>설명</th>
                        <th>갯수</th>
                        <th>추가</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map((e, idx) => {
                           return(
                             <tr key={idx}>
                                <td>{idx+1}</td>
                                <td>{e.title}</td>
                                <td>{e.content}</td>
                                <td>{count[idx]}</td>
                                <td><button onClick={()=>(clickHanlder(idx))}>+</button></td>
                             </tr>
                           )
                        })

                    }
                </tbody>
            </table>
        </div>
    )
}