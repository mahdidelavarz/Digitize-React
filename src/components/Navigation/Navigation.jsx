import { NavLink } from 'react-router-dom';
import { BiSearchAlt } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineFilter, HiShoppingCart } from "react-icons/hi";
import { PiListMagnifyingGlassLight, PiSignInBold } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";

const Navigation = () => {
  return (
    <div>
      <header className='flex flex-row-reverse w-full h-40 '>
        {/* Navigation in Mobile size */}
        <nav className='w-full h-40 md:hidden p-4'>
          <div className='w-full h-16 flex justify-between items-center  flex-row-reverse '>
            <div className='flex flex-row-reverse'>
              <RxHamburgerMenu className="bg-white w-9 h-9 lg:h-11 lg:w-11 text-stone-500 rounded-md p-1 cursor-pointer outline-none" />
              <div className='flex justify-center cursor-pointer bg-white items-center px-3 py-1 shadow-md rounded-md text-stone-500 mr-2'>
                <NavLink to={'/login'}>ورود</NavLink>
                <PiSignInBold className='text-xl ml-1 text-red-700' />
              </div>
            </div>
            <div className='flex items-center justify-center px-2'>
              <span className='text-2xl text-red-500'>Digi</span>
              <span className='text-slate-700 text-lg'>tize</span>
            </div>
            <div className='flex flex-row-reverse'>
              <div className='w-auto h-auto relative'>
                <NavLink to={'/cart'}>
                  <HiShoppingCart className='text-3xl text-red-600 mt-1 ml-4 cursor-pointer' />
                </NavLink>
                <span className='w-4 h-4 bg-red-600 text-white flex justify-center items-center rounded-full absolute bottom-5 left-8 text-[11px] ring-1 ring-white  '>2</span>
              </div>
              <BiSearchAlt className="bg-white w-9 h-9 lg:h-11 lg:w-11 text-stone-500 rounded-md p-1 cursor-pointer outline-none" />
            </div>
          </div>
          {/* Filter - sort mobile div */}
          <div className='w-full h-16 flex justify-evenly items-center'>
            <div className='bg-white flex justify-center items-center p-2 w-1/2 rounded-md  cursor-pointer'>
              <span className='text-stone-600'>فیلتر : برند اپل</span>
              <HiOutlineFilter className='text-red-700 ml-2 text-xl' />
            </div>
            <div className='bg-white flex justify-center items-center p-2 w-1/2 rounded-md ml-2 cursor-pointer'>
              <span className='text-stone-600'>محبوب ترین محصول</span>
              <PiListMagnifyingGlassLight className='text-red-700 ml-2  text-2xl' />
            </div>
          </div>
        </nav>
        {/* Navigation in size of bigger than 720*/}
        <nav className='hidden w-full md:flex h-20 justify-between items-center shadow-md bg-white'>
          {/* Search box */}
          <div className='flex relative'>
            <input type="text" className='w-[40vw] lg:w-[30vw] relative px-4 py-2 rounded-md shadow-md outline-none bg-slate-200 ml-4' placeholder='... جست و جوی نام محصول , نام برند و' />
            <FiSearch className='text-3xl absolute top-1 right-2  text-slate-500 cursor-pointer' />
          </div>
          <ul className='w-[60vw] h-full flex flex-row-reverse justify-start items-center px-4 '>
            <li className='mr-2 lg:mr-6 xl:mr-10 text-sm lg:text-lg xl:text-xl'>
              <NavLink to={'/'}>
                خانه
              </NavLink>
            </li>
            <li className='mr-6 lg:mr-16 xl:mr-20 text-sm lg:text-lg xl:text-xl'>
              <NavLink to={'/phone'}>
                تلفن همراه
              </NavLink>
            </li>
            <li className='mr-6 lg:mr-16 xl:mr-20 text-sm lg:text-lg xl:text-xl'>
              <NavLink to={'/laptop'}>
                لپ تاپ
              </NavLink>
            </li>
            <li className='mr-6 lg:mr-16 xl:mr-20 text-sm lg:text-lg xl:text-xl'>
              <NavLink to={'/watch'}>
                ساعت هوشمند
              </NavLink>
            </li>
          </ul>
          <div className='flex items-center justify-center px-2 mr-4 lg:mr-12 xl:mr-12'>
            <span className='text-2xl lg:text-3xl text-red-500'>Digi</span>
            <span className='text-slate-700 text-lg lg:text-xl'>tize</span>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navigation;