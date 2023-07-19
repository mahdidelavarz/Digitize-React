import Navigation from "../components/Navigation/Navigation";
import SortMenu from "../components/mainSortMenu/SortMenu";
import SideBar from "../components/sideBar/SideBar";
import Home from "../pages/Home";

const Layout = ({ children }) => {
    return (
        <div>
            <Navigation />
            <section className="grid grid-cols-12 md:grid-rows-[50px-minmax(500px,_1fr)] md:gap-4 p-3 px-6 md:px-6">
                <SortMenu />
                <SideBar/>
                {children}
            </section>
        </div>
    );
}

export default Layout;