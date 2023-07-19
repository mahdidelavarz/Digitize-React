import { GiCrossMark } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import { HiOutlineHome, HiOutlineDeviceMobile } from "react-icons/hi";
import { MdOutlineLaptopMac } from "react-icons/md";
import { IoWatchOutline } from "react-icons/io5";

const BurgerMenu = ({ burgerActive, handleBurger }) => {
  return (
    <div className="bg-slate-300">
      <div className={`w-[55vw] h-full bg-slate-300 transition-all duration-500 absolute top-0 right-0 rounded-md bg-opacity-100 ${burgerActive && 'translate-x-96 '}`}>
        {/* ---------------------- header of the menu ------------------------------- */}
        <div className="w-full h-20 bg-gradient-to-r from-slate-500 flex items-center rounded-t-md">
          <GiCrossMark onClick={handleBurger} className="text-[35px] text-white ml-6 cursor-pointer hover:text-red-300 transition-all duration-500" />
        </div>
        <div>
          {/* -------------------- items of the menu --------------------------------- */}
          <ul className='w-full  flex flex-col items-end px-4 '>
            <li className='w-full h-12  text-lg text-slate-600 px-4 cursor-pointer flex items-center mt-6 hover:bg-gradient-to-l from-slate-200 rounded-md transition-all duration-300'>
              <NavLink to={'/'} className='w-full flex justify-end'>
                خانه
              </NavLink>
              <div className="w-10 h-5  relative">
                <div className="w-6 h-6 bg-gradient-to-l from-slate-400 absolute top-[-5px] right-[-10px] rounded-full  z-0"></div>
                <HiOutlineHome className="text-orange-400 text-2xl ml-4 z-20 " />
              </div>
            </li>
            <li className='w-full h-12  text-lg text-slate-600 px-4 cursor-pointer flex items-center mt-6 hover:bg-gradient-to-l from-slate-200 rounded-md transition-all duration-300'>
              <NavLink to={'/phone'} className='w-full flex justify-end'>
                تلفن همراه
              </NavLink>
              <div className="w-10 h-5  relative">
                <div className="w-6 h-6 bg-gradient-to-l from-slate-400 absolute top-[-5px] right-[-10px] rounded-full  z-0"></div>
                <HiOutlineDeviceMobile className="text-orange-400 text-2xl ml-4" />
              </div>
            </li>
            <li className='w-full h-12  text-lg text-slate-600 px-4 cursor-pointer flex items-center mt-6 hover:bg-gradient-to-l from-slate-200 rounded-md transition-all duration-300'>
              <NavLink to={'/laptop'} className='w-full flex justify-end'>
                لپ تاپ
              </NavLink>
              <div className="w-10 h-5  relative">
                <div className="w-6 h-6 bg-gradient-to-l from-slate-400 absolute top-[-5px] right-[-10px] rounded-full  z-0"></div>
                <MdOutlineLaptopMac className="text-orange-400 text-2xl ml-4" />
              </div>
            </li>
            <li className='w-full h-12  text-lg text-slate-600 px-4 cursor-pointer flex items-center mt-6 hover:bg-gradient-to-l from-slate-200 rounded-md transition-all duration-300'>
              <NavLink to={'/watch'} className='w-full flex justify-end'>
                ساعت هوشمند
              </NavLink>
              <div className="w-10 h-5  relative">
                <div className="w-6 h-6 bg-gradient-to-l from-slate-400 absolute top-[-5px] right-[-10px] rounded-full  z-0"></div>
                <IoWatchOutline className="text-orange-400 text-2xl ml-4" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BurgerMenu;