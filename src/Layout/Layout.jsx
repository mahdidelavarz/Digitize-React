import Navigation from "../components/Navigation";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer"
import { CgProfile } from "react-icons/cg";
import { AiTwotoneHome } from "react-icons/ai";
import { BsFillHeartFill } from "react-icons/bs";
import { HiViewGrid } from "react-icons/hi";
import { useState } from "react";
import { Transition } from "@headlessui/react";

const Layout = ({ children }) => {
    const [active, setActive] = useState(0);
    return (
        <div>
            <Navigation />
            <section className="grid grid-cols-12 md:grid-rows-[50px-minmax(500px,_1fr)] md:gap-4 py-3  md:px-6">
                <SideBar />
                {children}
            </section>
            <Footer />
            <div className="w-full fixed bottom-0 p-2 pb-2 bg-white rounded-t-3xl md:hidden text-slate-600 shadow-sdt">
                <div className="flex justify-between">
                    <div className={` Transition-all duration-300 ${active === 1 ? ' bg-slate-200 p-4 rounded-md' : 'p-4 rounded-md'} `}>
                        <button onClick={() => setActive(1)} className="flex gap-2 items-center cursor-pointer">
                            <AiTwotoneHome className="text-xl"/><p className="text-sm">{active === 1 ? 'خانه' : ''}</p>
                        </button>
                    </div>
                    <div className={` Transition-all duration-300 ${active === 2 ? ' bg-slate-200 p-4 rounded-md' : 'p-4 rounded-md'} `}>
                        <button onClick={() => setActive(2)} className="flex gap-2 items-center cursor-pointer">
                            <BsFillHeartFill className="text-xl" />
                            <p className="text-sm">{active === 2 ? 'علاقمندی ها' : ''}</p>
                        </button>
                    </div>
                    <div className={` Transition-all duration-300 ${active === 3 ? ' bg-slate-200 p-4 rounded-md' : 'p-4 rounded-md'} `}>
                        <button onClick={() => setActive(3)} className="flex gap-2 items-center cursor-pointer">
                            <HiViewGrid className="text-xl"/>
                            <p className="text-sm">{active === 3 ? 'دسته بندی' : ''}</p>
                        </button>
                    </div>
                    <div className={` Transition-all duration-300 ${active === 4 ? ' bg-slate-200 p-4 rounded-md' : 'p-4 rounded-md'} `}>
                        <button onClick={() => setActive(4)} className="flex gap-2 items-center cursor-pointer">
                            <CgProfile className="text-xl"/>
                            <p className="text-sm">{active === 4 ? 'پروفایل' : ''}</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;