import { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProductAll from './Components/ProductAll';
import ProductDetail from './Components/ProductDetail';
import Login from './Components/Login';
import NavBar from './Components/NavBar';
import ProductCard from './Components/ProductCard';
import PrivateRouter from './Components/PrivateRouter';


function App() {
  // true면 로그인 , false면 로그인이 되지 않은 상태
  const [authenticate, setAuthenticate] = useState(false);

  useEffect(() => {
    console.log("Login", authenticate);
  }, [authenticate])

  return (
    <div>
      <NavBar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path='/' element={<ProductAll />} />
        <Route 
          path='/login' 
          element={<Login setAuthenticate={setAuthenticate} />} 
        />
        <Route 
          path='/product/:id' 
          element={<PrivateRouter authenticate={authenticate} />} 
        />
      </Routes>
    </div>
  );
}

export default App;
