import Layout from './Layout/Layout';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Laptop from './pages/LapTop';
import Phone from './pages/Phone';
import Watch from './pages/Watch';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/Login';


function App() {
  return (
    <div className='bg-slate-200'>
      <Router>
        <Routes>
          <Route path='/login' Component={Login}/>
          <Route path='/cart' Component={Cart} />
          <Route path='/laptop' Component={Laptop} />
          <Route path='/phone' Component={Phone} />
          <Route path='/watch' Component={Watch} />
          <Route path='/' Component={Home} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
