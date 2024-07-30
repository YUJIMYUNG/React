import { useState } from "react"
import data from "./data";
import "./accordion.css";

export default function Accordian(){
    // 변수를 선언하는 기본적인 방법
    // 눌린 상태인지 아닌지를 판별해주는 것
    let [selected, setSelected ]= useState(null);

    function clickHandler(id){
        console.log(id);
        // == :  1 == "1" true 자료형을 구분하지 않음
        // === : 1 === "1" false 자료형을 구분함
        selected === id ? setSelected(null) : setSelected(id);
    }


    return(
        <div>
            {/* react -> return안에서 사용하는 반복문은 map을 사용한다. */}
            {data?.map((ele, idx)=>{
                return(
                    <div className="item" key={idx}>
                        <div className="title" onClick={()=>clickHandler(ele.id)}>
                            <h3>{ele.title}</h3>
                            <p>+</p>
                            {selected === ele.id ? <div className="content">{ele.content}</div> : null}
                        </div>
                    </div>
                )
            })}
        </div>

    )
    
}