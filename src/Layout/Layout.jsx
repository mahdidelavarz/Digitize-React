import Navigation from "../components/Navigation";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer"
import { useState } from "react";
import FooterMenu from "../components/FooterMenu";

const Layout = ({ children }) => {
   
    return (
        <div>
            <Navigation />
            <section className="grid grid-cols-12 md:grid-rows-[50px-minmax(500px,_1fr)] md:gap-4 py-3  md:px-6">
                <SideBar />
                {children}
            </section>
            <Footer />
            <FooterMenu />
        </div>
    );
}

export default Layout;