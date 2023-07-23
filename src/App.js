import Home from './pages/Home';
import Cart from './pages/Cart';
import Laptop from './pages/LapTop';
import Phone from './pages/Phone';
import Watch from './pages/Watch';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import SingleProduct from './pages/SingleProduct';
import CartProvider from './context/CartProvider';


function App() {
  return (
    <div className='bg-slate-200'>
      <Router>
        <CartProvider>
          <Routes>
            <Route path='/login' Component={Login} />
            <Route path='/cart' Component={Cart} />
            <Route path='/laptop' Component={Laptop} />
            <Route path='/phone' Component={Phone} />
            <Route path='/watch' Component={Watch} />
            <Route path='/product' Component={SingleProduct} />
            <Route path='/' Component={Home} />
          </Routes>
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;
