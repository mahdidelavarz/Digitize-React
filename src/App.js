import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./routes";
import CartProvider from './context/Cart/CartProvider';
import InterestsProvider from "./context/favorites/InterestsProvider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='bg-slate-200'>
      <Router>
        <CartProvider>
          <InterestsProvider>
          <ToastContainer />
          <Routes>
            {routes.map((route) => {
              return <Route path={route.path} element={route.element} key={route.id} />
            })}
          </Routes>
          </InterestsProvider>
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;
