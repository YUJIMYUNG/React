import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Modal from './components/modal/modal';

function App() {

  // let[변수명, set변수명 ] = useState(기본값);
  // let[num, setNum] = useState(0);
  // let num1 = 0;
  
  // // 값을 바꿔줄때 :set변수명(변경하고싶은 값)
  // //setNum(2);

  // function clickHandler(){
  //   num1 += 1;

  //   console.log(num1);

  let[title, setTitle] = useState(["제목1", "제목2", "제목3"]);
  let[dateTime, setDateTime] = useState(['2024-07-30', '2024-07-28', '2024-06-23']);
  let[score, setScore] = useState([0, 0, 0]);
  let[curtIdx, setCurIdx] =useState(0);
  //열려있으면 true, 닫혀있으면 false라는 상태를 표현해주는 modal
  let[modal, setModal] = useState(false);

  function showDetail(){
    if(modal){
      setModal(false);
    }else{
      setModal(true);
    }
  }

  function upScore(idx){
    setScore(()=>{
      // useState 배열 안의 값은 직접적으로 수정이 안되기때문에 직접 수정하려면 ...배열명 으로 일반적인 배열 형태로 만들어줘야한다. 
      let temp = [...score];
      temp[idx]++;
      return temp; // == setScore([0,1,0])
    })
  }

  return (
    <div className='App'>
      {/* 변수는 렌더링이 되지 않고 console창을 확인해보면 변경이 된걸 알 수는 있음
      자바 변수 : {num1}
      <button onClick={()=>clickHandler()}>+</button>
      <br></br> */}
      {/* 변수를 즉각적으로 올리게(렌더링되게) 하고싶으면 useState를 사용한다.  */}
      {/* State변수 : {num}
      <button onClick={()=> setNum(num + 1)}>+</button>
      <br /> */}

        <nav className='black-nav'>
          <img src={logo} width={"100px"} height={"100px"} alt=''></img>
          <h4 style={{color:'#cfd', fontSize:"20px"}}>게시글</h4>
        </nav>

        {
          title.map(function(ele, idx){
            return(
              <div className='container'>
    
                <div className='list' key={idx}>
                  <h4 onClick={()=>{
                    setCurIdx(idx);
                    showDetail();
                  }}>{ele}</h4>
                  <span onClick={(e)=>{
                    //본인을 제외 한 부모등에게 (같은)이벤트를  전달해주지 않겠다는 stopProgation()
                    //e.stopPropagation();
                    upScore(idx);
                  }}>
                    👍🏻
                  </span>
                  <span>
                    {score[idx]}
                  </span>
                </div>
              </div>
            )
          })

        }
        {/* 아래 보내주는 전체 변수를 modal컴포넌트에서 props=properties를 입력하면 모두 받아올 수 있다 */}
        {modal ? <Modal curIdx={curtIdx} title={title} dateTime={dateTime}/> : null}
      
      
    </div>
  );
}

export default App;
