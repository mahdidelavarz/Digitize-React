import * as data from '../data';
import Navigation from "../components/Navigation";
import SortMenu from "../components/SortMenu";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, FreeMode } from 'swiper/modules';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';


const Home = () => {
  const filteredProducts = data.products.filter((product) => product.discount);
  console.log(filteredProducts)
  return (
    <div>
      <Navigation />
      <div className="col-span-12 md:col-span-9 h-auto md:p-4 md:rounded-md">
        <SortMenu />
        < Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper md:rounded-md md:mt-10"
        >
          <SwiperSlide><img className="w-full h-28 md:h-auto" src="https://dkstatics-public.digikala.com/digikala-adservice-banners/210c6957708eb21ba69eb79f76875e351b39a433_1691397339.jpg?x-oss-process=image/quality,q_95/format,webp" alt="banner" /></SwiperSlide>
          <SwiperSlide><img className="w-full h-28 md:h-auto" src="https://dkstatics-public.digikala.com/digikala-adservice-banners/98d0c52c68daa732ea2a34b345fec80322654476_1691572692.jpg?x-oss-process=image/quality,q_95/format,webp" alt="banner" /></SwiperSlide>
          <SwiperSlide><img className="w-full h-28 md:h-auto" src="https://dkstatics-public.digikala.com/digikala-adservice-banners/e1476e0e049495cbfc74fee2175985e60f6ad688_1691258457.jpg?x-oss-process=image/quality,q_95/format,webp" alt="banner" /></SwiperSlide>
        </Swiper>
        <div className="w-full h-auto mt-16 grid grid-cols-12 gap-y-10 gap-x-6">
          <div className="col-span-4 cursor-pointer lg:col-span-2 flex flex-col justify-center items-center">
            <NavLink to={"/phone"}>
              <div className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 bg-slate-100 rounded-full relative">
                <img className=" absolute -top-5" src="https://my.uupload.ir/dl/kjgY1v7e" alt="logo" />
              </div>
              <span className="text-xs md:text-sm  mt-2">گوشی موبایل</span>
            </NavLink>
          </div>
          <div className="col-span-4 cursor-pointer lg:col-span-2 flex flex-col justify-center items-center">
            <NavLink to={"/laptop"}>
              <div className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 bg-slate-100 rounded-full relative">
                <img className=" absolute -top-5" src="https://my.uupload.ir/dl/n2vYGpvD" alt="logo" />
              </div>
              <span className="text-xs md:text-sm  mt-2">لپ تاپ</span>
            </NavLink>
          </div>
          <div className="col-span-4 cursor-pointer lg:col-span-2 flex flex-col justify-center items-center">
            <NavLink to={"/watch"}>
              <div className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 bg-slate-100 rounded-full relative">
                <img className=" absolute -top-5" src="https://my.uupload.ir/dl/JgyprBBB" alt="logo" />
              </div>
              <span className="text-xs md:text-sm  mt-2">ساعت هوشمند</span>
            </NavLink>
          </div>
          <div className="col-span-4 cursor-pointer lg:col-span-2 flex flex-col justify-center items-center">
            <div className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 bg-slate-100 rounded-full relative">
              <img className=" absolute -top-5" src="https://my.uupload.ir/dl/4e5jJpzG" alt="logo" />
            </div>
            <span className="text-xs md:text-sm  mt-2">هدفون و هندزفری</span>
          </div>
          <div className="col-span-4 cursor-pointer lg:col-span-2 flex flex-col justify-center items-center">
            <div className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 bg-slate-100 rounded-full relative">
              <img className=" absolute -top-5" src="https://my.uupload.ir/dl/n2vY0z16" alt="logo" />
            </div>
            <span className="text-xs md:text-sm  mt-2">گیمینگ</span>
          </div>
          <div className="col-span-4 cursor-pointer lg:col-span-2 flex flex-col justify-center items-center">
            <div className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 bg-slate-100 rounded-full relative">
              <img className=" absolute -top-5" src="https://my.uupload.ir/dl/VX71rzJM" alt="logo" />
            </div>
            <span className="text-xs md:text-sm  mt-2">لوازم جانبی</span>
          </div>
        </div>
        <div className="col-span-12 h-auto bg-red-400 mt-10 p-x-2 py-6 grid grid-cols-12 rounded-lg">
          <div className="col-span-3 md:col-span-2 h-full bg-red-400 flex flex-col justify-center items-center">
            <img className="w-32 h-24" src="https://www.digikala.com/statics/img/svg/specialCarousel/Amazings.svg" alt="svg" />
            <img className="w-36" src="https://www.digikala.com/statics/img/png/specialCarousel/box.webp" alt="box" />
          </div>
          <div className="col-span-9 md:col-span-10 h-72 bg-white transition-all duration-1000 rounded-md">
            <Swiper
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                640: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 5,
                },
              }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              freeMode={true}
              // pagination={{
              //   clickable: true,
              // }}
              modules={[FreeMode, Pagination, Autoplay]}
              className="mySwiper h-full rounded-md"
            >
              {filteredProducts.map((product) => {
                return <SwiperSlide className='w-full h-full border-r-2 border-solid border-red-400 cursor-pointer' >
                  <NavLink to={product.to}>
                    <div className="flex justify-between items-center flex-col h-full py-2 pb-6 px-4 text-sm md:text-base">
                      <img className="w-40 h-40 bg-white object-cover" src={product.image} alt={product.name} />
                      <div className='flex justify-between w-full'>
                        <span className='block text-slate-600'>{product.price} تومان </span>
                        <span className='w-10 h-6 flex justify-center items-center text-xs md:text-sm text-white bg-red-500 rounded-full'>{product.discount}</span>
                      </div>

                      <span className='w-full flex justify-end text-slate-400 line-through'>{product.offPrice}</span>
                    </div>
                  </NavLink>
                </SwiperSlide>
              })}
            </Swiper>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Home;