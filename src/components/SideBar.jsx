import { NavLink } from 'react-router-dom';
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { MdOutlineLaptopMac } from "react-icons/md";
import { IoWatchOutline } from "react-icons/io5";
const SideBar = () => {
  return (
    <div className=" hidden md:block col-span-3 row-span-2 bg-white rounded-l-xl max-h-[100vh] overflow-scroll p-5">

      <ul className='w-full  flex flex-col  xl:px-4 '>
        <li className='mt-8 text-lg text-orange-500'>دسته بندی</li>
        <li className='w-full h-12  text-lg text-slate-600 lg:px-4 cursor-pointer flex items-center mt-6 hover:bg-gradient-to-l from-slate-200 rounded-md transition-all duration-300'>
          <div className="w-10 h-5  relative">
            <div className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 bg-gradient-to-l from-slate-300 absolute top-[-4px] right-[-5px] lg:top-[-5px] lg:right-[-10px] rounded-full  z-0"></div>
            <HiOutlineDeviceMobile className="text-orange-400 text-xl xl:text-2xl ml-2 lg:ml-4" />
          </div>
          <NavLink to={'/phone'} className='w-full flex text-sm lg:text-base'>
            تلفن همراه
          </NavLink>
        </li>
        <li className='w-full h-12  text-lg text-slate-600 lg:px-4 cursor-pointer flex items-center mt-3 lg:mt-6  hover:bg-gradient-to-l from-slate-200 rounded-md transition-all duration-300'>
          <div className="w-10 h-5  relative">
            <div className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 bg-gradient-to-l from-slate-300 absolute top-[-4px] right-[-5px] lg:top-[-5px] lg:right-[-10px] rounded-full  z-0"></div>
            <MdOutlineLaptopMac className="text-orange-400 text-xl xl:text-2xl ml-2 lg:ml-4" />
          </div>
          <NavLink to={'/laptop'} className='w-full flex text-sm lg:text-base '>
            لپ تاپ
          </NavLink>
        </li>
        <li className='w-full h-12  text-lg text-slate-600 lg:px-4 cursor-pointer flex items-center mt-3 lg:mt-6 hover:bg-gradient-to-l from-slate-200 rounded-md transition-all duration-300'>
          <div className="w-10 h-5  relative">
            <div className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 bg-gradient-to-l from-slate-300 absolute top-[-4px] right-[-5px] lg:top-[-5px] lg:right-[-10px] rounded-full  z-0"></div>
            <IoWatchOutline className="text-orange-400 text-xl xl:text-2xl ml-2 lg:ml-4" />
          </div>
          <NavLink to={'/watch'} className='w-full flex text-sm lg:text-base'>
            ساعت هوشمند
          </NavLink>
        </li>
      </ul>

    </div>
  );
}

export default SideBar;