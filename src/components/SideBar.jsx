import { NavLink } from 'react-router-dom';
import { HiOutlineHome, HiOutlineDeviceMobile } from "react-icons/hi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdOutlineLaptopMac } from "react-icons/md";
import { IoWatchOutline } from "react-icons/io5";
import { BsCaretDownFill } from "react-icons/bs";
import { useState } from 'react';

const SideBar = () => {
  const [active, setActive] = useState(true);
  const handleActive = () => {
    setActive(!active);
  }
  return (
    <div className=" hidden md:block col-span-3 row-span-2 bg-white rounded-l-xl max-h-[85vh] mt-2 overflow-scroll p-5 scrollbar-hide">
      <ul className='w-full  flex flex-col  xl:px-4 '>
        <li className='mt-5 text-lg text-orange-500'>دسته بندی</li>
        <li className='w-full h-12  text-lg text-slate-600 lg:px-4 cursor-pointer flex items-center mt-6 hover:bg-gradient-to-l from-slate-200 rounded-md transition-all duration-300'>
          <div className="w-10 h-5  relative">
            <div className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 bg-gradient-to-l from-slate-300 absolute top-[-4px] right-[-5px] lg:top-[-5px] lg:right-[-10px] rounded-full  z-0"></div>
            <HiOutlineHome className="text-orange-400 text-xl xl:text-2xl ml-2 lg:ml-4" />
          </div>
          <NavLink to={'/'} className='w-full flex text-sm lg:text-base'>
            خانه
          </NavLink>
        </li>
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
        <li className='mt-8 text-lg text-orange-400'>فیلتر</li>
        <div className='w-full h-auto mt-6'>
          <div onClick={handleActive} className=' w-full h-12  text-lg text-slate-600 lg:px-4 cursor-pointer flex items-center mt-6 hover:bg-gradient-to-l from-slate-200 rounded-md transition-all duration-500'>
            <div className="w-full relative flex">
              <div className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 bg-gradient-to-l from-slate-300 absolute top-[-4px] right-[-5px] lg:top-[-5px] lg:right-[-10px] rounded-full z-0"></div>
              <HiOutlineBuildingOffice2 className="text-orange-400 text-xl xl:text-2xl ml-2 lg:ml-4" />
              <span className='text-xs lg:text-base'>برند محصول</span>
            </div>
            <BsCaretDownFill className={`text-xs lg:text-sm transition-all duration-300 ${active && 'rotate-180'}`} />
          </div>
          <div className={`transition-all duration-300 w-full bg-red-200 ${active ? 'h-40' : 'h-0'}`}>
            <div className="flex flex-1">
              <ul className="pr-7 py-3 lg:pr-10">
                <li className="py-1 flex">
                  <div className="w-4 h-4 border bg-white border-orange-200 rounded-sm ml-2 cursor-pointer"></div>
                  <span className="cursor-pointer text-gray-700 text-xs lg:text-sm ">
                    اپل</span>
                </li>
                <li className="py-1 flex">
                  <div className="w-4 h-4 border bg-white border-orange-200 rounded-sm ml-2 cursor-pointer"></div>
                  <span className="cursor-pointer text-gray-700 text-xs lg:text-sm ">
                    سامسونگ</span>
                </li>
                <li className="py-1 flex">
                  <div className="w-4 h-4 border bg-white border-orange-200 rounded-sm ml-2 cursor-pointer"></div>
                  <span className="cursor-pointer text-gray-700 text-xs lg:text-sm ">شیایومی</span>
                </li>
                <li className="py-1 flex">
                  <div className="w-4 h-4 border bg-white border-orange-200 rounded-sm ml-2 cursor-pointer"></div>
                  <span className="cursor-pointer text-gray-700 text-xs lg:text-sm ">هواوی</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ul>

    </div>
  );
}

export default SideBar;