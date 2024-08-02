import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Detail from './pages/detail/detail';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
