import { NavLink } from 'react-router-dom';
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { MdOutlineLaptopMac } from "react-icons/md";
import { IoWatchOutline } from "react-icons/io5";
const SideBar = () => {
  return (
    <div className=" hidden md:block col-span-3 row-span-2 bg-white rounded-l-xl max-h-[100vh] overflow-scroll p-5">

      <ul className='w-full  flex flex-col  px-4 '>
        <li className='mt-8 text-xl text-orange-500'>دسته بندی</li>
        <li className='w-full h-12  text-lg text-slate-600 px-4 cursor-pointer flex items-center mt-6 hover:bg-gradient-to-l from-slate-200 rounded-md transition-all duration-300'>
          <div className="w-10 h-5  relative">
            <div className="w-6 h-6 bg-gradient-to-l from-slate-300 absolute top-[-5px] right-[-10px] rounded-full  z-0"></div>
            <HiOutlineDeviceMobile className="text-orange-400 text-2xl ml-4" />
          </div>
          <NavLink to={'/phone'} className='w-full flex '>
            تلفن همراه
          </NavLink>
        </li>
        <li className='w-full h-12  text-lg text-slate-600 px-4 cursor-pointer flex items-center mt-6 hover:bg-gradient-to-l from-slate-200 rounded-md transition-all duration-300'>
          <div className="w-10 h-5  relative">
            <div className="w-6 h-6 bg-gradient-to-l from-slate-300 absolute top-[-5px] right-[-10px] rounded-full  z-0"></div>
            <MdOutlineLaptopMac className="text-orange-400 text-2xl ml-4" />
          </div>
          <NavLink to={'/laptop'} className='w-full flex '>
            لپ تاپ
          </NavLink>
        </li>
        <li className='w-full h-12  text-lg text-slate-600 px-4 cursor-pointer flex items-center mt-6 hover:bg-gradient-to-l from-slate-200 rounded-md transition-all duration-300'>
          <div className="w-10 h-5  relative">
            <div className="w-6 h-6 bg-gradient-to-l from-slate-300 absolute top-[-5px] right-[-10px] rounded-full  z-0"></div>
            <IoWatchOutline className="text-orange-400 text-2xl ml-4" />
          </div>
          <NavLink to={'/watch'} className='w-full flex '>
            ساعت هوشمند
          </NavLink>
        </li>
      </ul>

    </div>
  );
}

export default SideBar;