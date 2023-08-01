import Home from './pages/Home';
import Cart from './pages/Cart';
import Laptop from './pages/LapTop';
import Phone from './pages/Phone';
import Watch from './pages/Watch';
import Login from './pages/Login';
import SingleProduct from './pages/SingleProduct';



const routes = [
    { path: "/watch/product/:id", element: <SingleProduct />, id: 1 },
    { path: "/laptop/product/:id", element: <SingleProduct />, id: 1 },
    { path: "/phone/product/:id", element: <SingleProduct />, id: 1 },
    { path: "/cart", element: <Cart />, id: 2 },
    { path: "/login", element: <Login />, id: 3 },
    { path: "/laptop", element: <Laptop />, id: 4 },
    { path: "/watch", element: <Watch />, id: 5 },
    { path: "/phone", element: <Phone />, id: 6 },
    { path: "/", element: <Home />, id: 7 },
];

export default routes;


