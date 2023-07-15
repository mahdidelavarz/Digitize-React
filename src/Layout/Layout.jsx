import Navigation from "../components/Navigation/Navigation";
import Home from "../pages/Home";

const Layout = ({ children }) => {
    return (
        <div>
            <Navigation />
            {children}
        </div>
    );
}

export default Layout;