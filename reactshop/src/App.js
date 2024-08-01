import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import data from './data';
import Detailpage from './pages/detail';
import { useState } from 'react';
import { changeData } from './store/store';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  let[item, setItem] = useState(data);
  let[ img, setImg] = useState(['/cat1.jpeg', '/cat2.jpeg', 'cat3.jpeg']);
  let data = useSelector((state)=>{return state.slice1})
  let dispatch = useDispatch();

  //useNavigate
  let navigate = useNavigate();

  let clickHandler = () =>{
    console.log("바뀌기 전 data" + data)
    console.log(dispatch(changeData(2)));

    console.log("바뀐 후 data" + data)
  }


  return (
    <div >
      <Navbar bg='dark' data-bs-theme="dark">
        <Container>
          <Navbar.Brand href='/'>
            <img src='/logo192.png' width={'50px'} />
          </Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href="/">홈</Nav.Link>
            <Nav.Link href="/detail/0">상세페이지</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link onClick={()=>{navigate(-1)}}>뒤로가기</Nav.Link>
            <Nav.Link onClick={()=>{navigate(1)}}>앞으로가기</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail/2')}}>2번 게시글로 이동</Nav.Link>
            <button onClick={clickHandler}>redux test</button>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <>
            
          </>
        }/>
        <Route path='/detail/:id' element={<Detailpage item={item} img={img}/>} />
        <Route path='*' element={<div>없는 페이지 입니다 (404) </div>} />
      </Routes>
    </div>
  );
}

export default App;
