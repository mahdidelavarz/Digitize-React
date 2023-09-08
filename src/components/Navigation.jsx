import { NavLink } from 'react-router-dom';
import { BiSearchAlt } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineFilter, HiShoppingCart } from "react-icons/hi";
import { PiListMagnifyingGlassLight, PiSignInBold } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";
import BurgerMenu from './menu/BurgerMenu';
import { UseCart } from "../context/Cart/CartProvider";
const Navigation = () => {
  const { cart } = UseCart();
  return (
    <div className='w-full h-40 md:h-20 '>
      <header className='flex  w-full h-auto fixed top-0 z-50 bg-slate-200'>
        {/* --------------------- Navigation in Mobile size -------------------------------------------*/}
        <nav className='w-full h-40 md:hidden p-4'>
          <div className='w-full h-16 flex justify-between items-center'>
            <div className='flex '>
              <RxHamburgerMenu className="bg-white w-9 h-9 lg:h-11 lg:w-11 text-stone-500 rounded-md p-1 cursor-pointer outline-none" />
              <div className='flex justify-center cursor-pointer bg-white items-center px-3 py-1 shadow-md rounded-md text-stone-500 mr-3'>
                <NavLink to={'/login'} className='flex items-center gap-2'>ورود
                  <PiSignInBold className='text-xl ml-1 text-red-700' />
                </NavLink>
              </div>
            </div>
            <div className='flex items-center justify-center px-2'>
              <span className='text-3xl text-red-500'>دیجی</span>
              <span className='text-slate-700 text-xl'>تایز</span>
            </div>
            <div className='flex '>
              <div className='w-auto h-auto relative'>
                <NavLink to={'/cart'}>
                  <HiShoppingCart className='text-3xl text-red-600 mt-1 ml-4 cursor-pointer' />
                  <span className='w-4 h-4 bg-red-600 text-white flex justify-center items-center rounded-full absolute bottom-5 left-8 text-[11px] ring-1 ring-white'>{cart.length}</span>
                </NavLink>
              </div>
              <BiSearchAlt className="bg-white w-9 h-9 lg:h-11 lg:w-11 text-stone-500 rounded-md p-1 cursor-pointer outline-none" />
            </div>
          </div>
          <BurgerMenu/>
          {/* --------------------- Filter - sort mobile div -------------------------------------------*/}
          <div className='w-full h-16 flex justify-evenly items-center'>
            <div className='bg-white flex justify-center items-center p-2 w-1/2 rounded-md ml-5 cursor-pointer'>
              <PiListMagnifyingGlassLight className='text-red-700 ml-2  text-xl' />
              <span className='text-stone-600 text-xs'>محبوب ترین محصول</span>
            </div>
            <div className='bg-white flex justify-center items-center p-2 w-1/2 rounded-md  cursor-pointer'>
              <HiOutlineFilter className='text-red-700 ml-2 text-xl' />
              <span className='text-stone-600 text-xs'>فیلتر : برند اپل</span>
            </div>
          </div>
        </nav>
        {/* ----------------------- Navigation in size of bigger than 720 -------------------------------*/}
        <nav className='hidden w-full md:flex h-20 justify-between items-center shadow-md bg-white'>
          <div className='flex'>
            <div className='flex items-center justify-center px-2 mr-4 lg:mr-12 xl:mr-12'>
              <span className='text-2xl lg:text-3xl text-red-500'>دیجی</span>
              <span className='text-slate-700 text-lg lg:text-xl'>تایز</span>
            </div>
            {/*-------------------- Search box -----------------------------*/}
            <div className='flex relative ml-4'>
              <FiSearch className='text-3xl absolute top-1 right-6  text-slate-500 cursor-pointer z-50' />
              <input type="text" className='w-[40vw] lg:w-[30vw] relative pr-10 pl-4 py-2 rounded-md shadow-md outline-none bg-slate-200 mr-4 z-30' placeholder=' جست و جوی نام محصول , نام برند و ...' />
            </div>
          </div>
          {/* ------------------- Nav items ----------------------------- */}
          <div className='w-60 flex justify-between px-12'>
            <div className='w-auto h-auto relative'>
              <NavLink to={'/cart'} >
                <HiShoppingCart className='text-3xl text-red-600 mt-1 ml-4 cursor-pointer' name='cart' />
                <span className='w-4 h-4 bg-red-600 text-white flex justify-center items-center rounded-full absolute bottom-5 left-8 text-[11px] ring-1 ring-white cursor-pointer' name='cart'>{cart.length}</span>
              </NavLink>
            </div>
            <div className='flex cursor-pointer bg-white  shadow-md rounded-md text-stone-500 mr-2'>
              <NavLink to={'/login'} className='flex items-center px-3 py-1'>ورود
                <PiSignInBold className='text-xl text-red-700' />
              </NavLink>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navigation;