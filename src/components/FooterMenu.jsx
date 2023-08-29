import { CgProfile } from "react-icons/cg";
import { AiTwotoneHome } from "react-icons/ai";
import { BsFillHeartFill } from "react-icons/bs";
import { HiViewGrid } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const FooterMenu = () => {
    const [active, setActive] = useState(0);
    return (
        <div className="w-full fixed bottom-0 p-2 pb-2 bg-white rounded-t-3xl md:hidden text-slate-600 shadow-sdt z-50">
            <div className="flex justify-between">
                <div className={` Transition-all duration-300 ${active === 1 ? ' bg-slate-200 p-4 rounded-md' : 'p-4 rounded-md'} `}>
                    <button onClick={() => setActive(1)} className="flex gap-2 items-center cursor-pointer">
                        <NavLink to={'/'} >
                            <AiTwotoneHome className="text-xl" /><p className="text-sm">{active === 1 ? 'خانه' : ''}</p>
                        </NavLink>
                    </button>
                </div>
                <div className={` Transition-all duration-300 ${active === 2 ? ' bg-slate-200 p-4 rounded-md' : 'p-4 rounded-md'} `}>
                    <NavLink to={'/interests'}>
                        <button onClick={() => setActive(2)} className="flex gap-2 items-center cursor-pointer">
                            <BsFillHeartFill className="text-xl" />
                            <p className="text-sm">{active === 2 ? 'علاقمندی ها' : ''}</p>
                        </button>
                    </NavLink>
                </div>
                <div className={` Transition-all duration-300 ${active === 3 ? ' bg-slate-200 p-4 rounded-md' : 'p-4 rounded-md'} `}>
                    <button onClick={() => setActive(3)} className="flex gap-2 items-center cursor-pointer">
                        <HiViewGrid className="text-xl" />
                        <p className="text-sm">{active === 3 ? 'دسته بندی' : ''}</p>
                    </button>
                </div>
                <div className={` Transition-all duration-300 ${active === 4 ? ' bg-slate-200 p-4 rounded-md' : 'p-4 rounded-md'} `}>
                    <button onClick={() => setActive(4)} className="flex gap-2 items-center cursor-pointer">
                        <CgProfile className="text-xl" />
                        <p className="text-sm">{active === 4 ? 'پروفایل' : ''}</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FooterMenu;