import { GiCrossMark } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import { HiOutlineHome, HiOutlineDeviceMobile } from "react-icons/hi";
import { MdOutlineLaptopMac } from "react-icons/md";
import { IoWatchOutline } from "react-icons/io5";
import { slide as Menu } from 'react-burger-menu'
const BurgerMenu = () => {

  return (
    <Menu right className="w-[70vw] bg-slate-300 fixed top-0 right-0">
      <div className={`h-full bg-slate-300 `}>
        {/* ---------------------- header of the menu ------------------------------- */}
        <div className="w-full h-20 bg-gradient-to-r from-slate-500 flex items-center justify-end rounded-t-md">
          <GiCrossMark className=" text-[35px] text-white ml-6 cursor-pointer hover:text-red-300 transition-all duration-700"/>
        </div>
        <div>
          {/* -------------------- items of the menu --------------------------------- */}
          <ul className='w-full  flex flex-col  px-4 '>
            <li className='w-full h-12  text-lg text-slate-600 px-4 cursor-pointer flex items-center mt-6 hover:bg-gradient-to-l from-slate-200 rounded-md transition-all duration-300'>
              <div className="w-10 h-5  relative">
                <div className="w-6 h-6 bg-gradient-to-l from-slate-400 absolute top-[-5px] right-[-10px] rounded-full  z-0"></div>
                <HiOutlineHome className="text-orange-400 text-2xl ml-4 z-20 " />
              </div>
              <NavLink to={'/'} className='w-full flex '>
                خانه
              </NavLink>
            </li>
            <li className='w-full h-12  text-lg text-slate-600 px-4 cursor-pointer flex items-center mt-6 hover:bg-gradient-to-l from-slate-200 rounded-md transition-all duration-300'>
              <div className="w-10 h-5  relative">
                <div className="w-6 h-6 bg-gradient-to-l from-slate-400 absolute top-[-5px] right-[-10px] rounded-full  z-0"></div>
                <HiOutlineDeviceMobile className="text-orange-400 text-2xl ml-4" />
              </div>
              <NavLink to={'/phone'} className='w-full flex '>
                تلفن همراه
              </NavLink>
            </li>
            <li className='w-full h-12  text-lg text-slate-600 px-4 cursor-pointer flex items-center mt-6 hover:bg-gradient-to-l from-slate-200 rounded-md transition-all duration-300'>
              <div className="w-10 h-5  relative">
                <div className="w-6 h-6 bg-gradient-to-l from-slate-400 absolute top-[-5px] right-[-10px] rounded-full  z-0"></div>
                <MdOutlineLaptopMac className="text-orange-400 text-2xl ml-4" />
              </div>
              <NavLink to={'/laptop'} className='w-full flex '>
                لپ تاپ
              </NavLink>
            </li>
            <li className='w-full h-12  text-lg text-slate-600 px-4 cursor-pointer flex items-center mt-6 hover:bg-gradient-to-l from-slate-200 rounded-md transition-all duration-300'>
              <div className="w-10 h-5  relative">
                <div className="w-6 h-6 bg-gradient-to-l from-slate-400 absolute top-[-5px] right-[-10px] rounded-full  z-0"></div>
                <IoWatchOutline className="text-orange-400 text-2xl ml-4" />
              </div>
              <NavLink to={'/watch'} className='w-full flex '>
                ساعت هوشمند
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </Menu>
  );
}

export default BurgerMenu;