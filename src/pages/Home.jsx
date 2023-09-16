
import Navigation from "../components/Navigation";
import React from 'react';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';
import FooterMenu from '../components/menu/FooterMenu';
import HeaderSlide from '../components/swiper-slides/HeaderSlide';
import DiscountSlide from '../components/swiper-slides/DiscountSlide';
import useLoading from "../hooks/useLoading";
import {HomeSkeleton} from "../components/common/Loading";


const Home = () => {
  const loading = useLoading();
  return (
    <>
      <div>
        <Navigation />
        {loading ?
          <div className=" h-auto md:p-4 md:rounded-md">
            <HeaderSlide />
            <div className="w-full h-auto mt-16 grid grid-cols-12 gap-y-10 gap-x-6 pr-3">
              <div className="col-span-6 cursor-pointer lg:col-span-3 flex flex-col justify-center items-center">
                <NavLink to={"/phone"} className='flex flex-col items-center'>
                  <div className="w-36 h-36 relative bg-slate-50  ring-2 ring-slate-600 flex justify-center items-center rounded-full shadow-xl shadow-slate-500 ">
                    <div className='w-20 h-20 absolute rounded-full -top-3 -right-3 bg-white ring-2 ring-slate-500'>
                      <img src="https://my.uupload.ir/dl/kjgY1v7e" alt="phone" />
                    </div>
                    <img src="https://my.uupload.ir/dl/JgyxY2bk" alt="phone" className='object-cover' />
                  </div>
                  <span className="text-xs md:text-sm  mt-2">گوشی موبایل</span>
                </NavLink>
              </div>
              <div className="col-span-6 cursor-pointer lg:col-span-3 flex flex-col justify-center items-center">
                <NavLink to={"/laptop"} className='flex flex-col items-center'>
                  <div className="w-36 h-36 relative  bg-slate-50  ring-2 ring-slate-600 flex justify-center items-center rounded-full shadow-xl shadow-slate-500 ">
                    <div className='w-20 h-20 absolute rounded-full -top-3 -right-3 bg-white ring-2 ring-slate-500'>
                      <img src="https://my.uupload.ir/dl/wZ21EgZB" alt="phone" />
                    </div>
                    <img className='object-cover' src="https://my.uupload.ir/dl/EOgBrpWp" alt="laptop" />
                  </div>
                  <span className="text-xs md:text-sm  mt-2">لپ تاپ</span>
                </NavLink>
              </div>
              <div className="col-span-6 cursor-pointer lg:col-span-3 flex flex-col justify-center items-center">
                <NavLink to={"/watch"} className='flex flex-col items-center'>
                  <div className="w-36 h-36 relative  bg-slate-50  ring-2 ring-slate-600 flex justify-center items-center rounded-full shadow-xl shadow-slate-500 ">
                    <div className='w-20 h-20 absolute rounded-full -top-3 -right-3 bg-white ring-2 ring-slate-500'>
                      <img src="https://my.uupload.ir/dl/EOgen710" alt="" />
                    </div>
                    <img className=' object-cover' src="https://my.uupload.ir/dl/5L5jga4e" alt="watch" />
                  </div>
                  <span className="text-xs md:text-sm  mt-2">ساعت هوشمند</span>
                </NavLink>
              </div>
              <div className="col-span-6 cursor-pointer lg:col-span-3 flex flex-col justify-center items-center">
                <div className="w-36 h-36  bg-slate-50 relative  ring-2 ring-slate-600 flex justify-center items-center rounded-full shadow-xl shadow-slate-500 ">
                  <div className='w-20 h-20 absolute rounded-full -top-3 -right-3 bg-white ring-2 ring-slate-500'>
                    <img src="https://my.uupload.ir/dl/v9pXkEGb" alt="" />
                  </div>
                  <img className='object-contain w-40 h-40' src="https://my.uupload.ir/dl/4e5KM0e2" alt="phone" />
                </div>
                <span className="text-xs md:text-sm  mt-2">هدفون و هندزفری</span>
              </div>
            </div>
            <div className="col-span-12 h-auto bg-red-500 mt-10 p-x-2 py-6 grid grid-cols-12">
              <div className="col-span-12 h-72 bg-white transition-all duration-1000 ">
                <DiscountSlide />
              </div>
            </div>
          </div>
          :
          <HomeSkeleton />
        }
        <Footer />
        <FooterMenu />
      </div>
    </>
  );
}
export default Home;