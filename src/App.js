import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./routes";
import CartProvider from './context/CartProvider'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='bg-slate-200'>
      <Router>
        <CartProvider>
          <ToastContainer />
          <Routes>
            {routes.map((route) => {
              return <Route path={route.path} element={route.element} key={route.id} />
            })}
          </Routes>
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;
