import Navigation from "../components/Navigation";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer"
import { CgProfile } from "react-icons/cg";
import { AiTwotoneHome } from "react-icons/ai";
import { BsFillHeartFill } from "react-icons/bs";
import { HiViewGrid } from "react-icons/hi";

const Layout = ({ children }) => {
    return (
        <div>
            <Navigation />
            <section className="grid grid-cols-12 md:grid-rows-[50px-minmax(500px,_1fr)] md:gap-4 py-3  md:px-6">
                <SideBar />
                {children}
            </section>
            <Footer />
            <div className="w-full fixed bottom-0 p-6 bg-white rounded-t-3xl md:hidden text-slate-600 shadow-sdt">
                <div className="flex justify-between">
                    <div className="flex gap-2 items-center cursor-pointer">
                        <AiTwotoneHome />
                        <p className="text-sm">خانه</p>
                    </div>
                    <div className="flex gap-2 items-center cursor-pointer">
                        <BsFillHeartFill />
                        <p className="text-sm">علاقمندی ها</p>
                    </div>
                    <div className="flex gap-2 items-center cursor-pointer">
                        <HiViewGrid />
                        <p className="text-sm">دسته بندی</p>
                    </div>
                    <div className="flex gap-2 items-center cursor-pointer">
                        <CgProfile />
                        <p className="text-sm">پروفایل</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;