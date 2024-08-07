import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Detail from './pages/detail/detail';
import Cart from './cart/cart';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
