import Navigation from "../components/Navigation";
import SortMenu from "../components/SortMenu";
import SideBar from "../components/SideBar";

const Layout = ({ children }) => {
    return (
        <div>
            <Navigation />
            <section className="grid grid-cols-12 md:grid-rows-[50px-minmax(500px,_1fr)] md:gap-4 p-3 px-3 md:px-6">
                <SideBar/>
                {/* <SortMenu /> */}
                {children}
            </section>
        </div>
    );
}

export default Layout;