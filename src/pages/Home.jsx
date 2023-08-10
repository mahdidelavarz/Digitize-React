import Layout from "../Layout/Layout";
import SortMenu from "../components/SortMenu";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Home = () => {
  return (
    <div>
      <Layout>
        <div className="col-span-12 md:col-span-9 h-auto p-4 rounded-md">
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
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper rounded-md mt-10"
          >
            <SwiperSlide><img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/210c6957708eb21ba69eb79f76875e351b39a433_1691397339.jpg?x-oss-process=image/quality,q_95/format,webp" alt="banner" /></SwiperSlide>
            <SwiperSlide><img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/98d0c52c68daa732ea2a34b345fec80322654476_1691572692.jpg?x-oss-process=image/quality,q_95/format,webp" alt="banner" /></SwiperSlide>
            <SwiperSlide><img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/e1476e0e049495cbfc74fee2175985e60f6ad688_1691258457.jpg?x-oss-process=image/quality,q_95/format,webp" alt="banner" /></SwiperSlide>
          </Swiper>
          <div className="w-full h-auto mt-8 grid grid-cols-12 gap-y-10 gap-x-6">
            <div className="col-span-4 cursor-pointer lg:col-span-2 flex flex-col justify-center items-center">
              <div className="w-20 h-20 md:w-28 md:h-28 bg-white rounded-full relative">
                <img className=" absolute -top-5" src="https://my.uupload.ir/dl/kjgY1v7e" alt="logo" />
              </div>
              <span className="text-xs md:text-sm  mt-2">گوشی موبایل</span>
            </div>
            <div className="col-span-4 cursor-pointer lg:col-span-2 flex flex-col justify-center items-center">
              <div className="w-20 h-20 md:w-28 md:h-28 bg-white rounded-full relative">
                <img className=" absolute -top-5" src="https://my.uupload.ir/dl/n2vYGpvD" alt="logo" />
              </div>
              <span className="text-xs md:text-sm  mt-2">لپ تاپ</span>
            </div>
            <div className="col-span-4 cursor-pointer lg:col-span-2 flex flex-col justify-center items-center">
              <div className="w-20 h-20 md:w-28 md:h-28 bg-white rounded-full relative">
                <img className=" absolute -top-5" src="https://my.uupload.ir/dl/JgyprBBB" alt="logo" />
              </div>
              <span className="text-xs md:text-sm  mt-2">ساعت هوشمند</span>
            </div>
            <div className="col-span-4 cursor-pointer lg:col-span-2 flex flex-col justify-center items-center">
              <div className="w-20 h-20 md:w-28 md:h-28 bg-white rounded-full relative">
                <img className=" absolute -top-5" src="https://my.uupload.ir/dl/4e5jJpzG" alt="logo" />
              </div>
              <span className="text-xs md:text-sm  mt-2">هدفون و هندزفری</span>
            </div>
            <div className="col-span-4 cursor-pointer lg:col-span-2 flex flex-col justify-center items-center">
              <div className="w-20 h-20 md:w-28 md:h-28 bg-white rounded-full relative">
                <img className=" absolute -top-5" src="https://my.uupload.ir/dl/n2vY0z16" alt="logo" />
              </div>
              <span className="text-xs md:text-sm  mt-2">گیمینگ</span>
            </div>
            <div className="col-span-4 cursor-pointer lg:col-span-2 flex flex-col justify-center items-center">
              <div className="w-20 h-20 md:w-28 md:h-28 bg-white rounded-full relative">
                <img className=" absolute -top-5" src="https://my.uupload.ir/dl/VX71rzJM" alt="logo" />
              </div>
              <span className="text-xs md:text-sm  mt-2">لوازم جانبی</span>
            </div>
          </div>
          </div>
      </Layout>
    </div>
  );
}
export default Home;
