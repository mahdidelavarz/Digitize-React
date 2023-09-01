import { NavLink } from 'react-router-dom';
import { HiOutlineDeviceMobile} from "react-icons/hi";
import { MdOutlineLaptopMac } from "react-icons/md";
import { IoWatchOutline } from "react-icons/io5";
import { BsHeartHalf } from "react-icons/bs";
const HomeGrouping = () => {
    return (
        <div className="hidden md:flex bg-white col-span-9 rounded-md justify-center items-center p-4" >
            <ul className="w-full flex  text-base gap-6">
                <li className='w-auto  text-slate-600 h-12 px-4 cursor-pointer flex items-center hover:bg-gradient-to-l from-slate-200 rounded-md transition-all duration-300'>
                    <div className="w-10 h-5  relative">
                        <div className="w-6 h-6 bg-gradient-to-l from-slate-400 absolute top-[-5px] right-[-10px] rounded-full  z-0"></div>
                        <HiOutlineDeviceMobile className="text-orange-400 text-2xl ml-4" />
                    </div>
                    <NavLink to={'/phone'} className='w-full flex '>
                        تلفن همراه
                    </NavLink>
                </li>
                <li className='w-auto  text-slate-600 h-12 px-4 cursor-pointer flex items-center hover:bg-gradient-to-l from-slate-200 rounded-md transition-all duration-300'>
                    <div className="w-10 h-5  relative">
                        <div className="w-6 h-6 bg-gradient-to-l from-slate-400 absolute top-[-5px] right-[-10px] rounded-full  z-0"></div>
                        <MdOutlineLaptopMac className="text-orange-400 text-2xl ml-4" />
                    </div>
                    <NavLink to={'/laptop'} className='w-full flex '>
                        لپ تاپ
                    </NavLink>
                </li>
                <li className='w-auto  text-slate-600 h-12 px-4 cursor-pointer flex items-center hover:bg-gradient-to-l from-slate-200 rounded-md transition-all duration-300'>
                    <div className="w-10 h-5  relative">
                        <div className="w-6 h-6 bg-gradient-to-l from-slate-400 absolute top-[-5px] right-[-10px] rounded-full  z-0"></div>
                        <IoWatchOutline className="text-orange-400 text-2xl ml-4" />
                    </div>
                    <NavLink to={'/watch'} className='w-full flex '>
                        ساعت هوشمند
                    </NavLink>
                </li>
                <li className='w-auto  text-slate-600 h-12 px-4 cursor-pointer flex items-center hover:bg-gradient-to-l from-slate-200 rounded-md transition-all duration-300'>
                    <div className="w-10 h-5  relative">
                        <div className="w-6 h-6  bg-gradient-to-l from-slate-400 absolute top-[-5px] right-[-10px] rounded-full z-0"></div>
                        <BsHeartHalf className="text-orange-400 text-2lg" />
                    </div>
                    <NavLink to={'/interests'} className='w-full flex '>
                        علاقمندی
                    </NavLink>
                </li>
            </ul>

        </div>
    );
}

export default HomeGrouping;