import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function Detailpage(props){
    //useParams(); : 
    let {id} = useParams();

    console.log(id);
    
    //선택된 아이템인지 식별(items의 id와 URL파라미터의 id가 같은지 검사) 
    let selectedItem = props.item.find((e)=>{
        return e.id == id
    })

    let[hideDom, setHideDom] = useState(false);


    //useEffect : 
    //생성시 작동
    useEffect(()=>{

        console.log('mount')

        setTimeout(()=>{
            setHideDom(true)
        }, 2000)

        //unmount에 대해서는 return에 작성
        return(()=>{
            console.log("unmount")
        })
    },[])


    //URL파라미터를 useParams()로 받는다(상세페이지의 id)
    return(
        <>
            <Container>
                {
                    hideDom === false ? (
                        <>
                        </>
                    ) : null
                }
                <Row>
                    <Col>
                        <img src={props.img[selectedItem.id]} width={'400px'} height={'300px'}/>
                    </Col>
                    <Col>
                        <h4>{selectedItem.title}</h4>
                        <p>{selectedItem.content}</p>
                        <p>{selectedItem.price}</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}