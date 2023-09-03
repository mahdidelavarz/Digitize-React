import * as data from '../data';
import Navigation from "../components/Navigation";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, FreeMode } from 'swiper/modules';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';
import FooterMenu from '../components/FooterMenu';
import HomeGrouping from '../components/HomeGrouping';


const Home = () => {
  const filteredProducts = data.products.filter((product) => product.discount);
  console.log(filteredProducts)
  return (
    <div>
      <Navigation />
      <div className="col-span-12 md:col-span-9 h-auto md:p-4 md:rounded-md">
        <HomeGrouping />
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
          <SwiperSlide><img className="w-full h-40 md:h-auto object-cover" src="https://dkstatics-public.digikala.com/digikala-adservice-banners/210c6957708eb21ba69eb79f76875e351b39a433_1691397339.jpg?x-oss-process=image/quality,q_95/format,webp" alt="banner" /></SwiperSlide>
          <SwiperSlide><img className="w-full h-40 md:h-auto object-cover" src="https://dkstatics-public.digikala.com/digikala-adservice-banners/98d0c52c68daa732ea2a34b345fec80322654476_1691572692.jpg?x-oss-process=image/quality,q_95/format,webp" alt="banner" /></SwiperSlide>
          <SwiperSlide><img className="w-full h-40 md:h-auto object-cover" src="https://dkstatics-public.digikala.com/digikala-adservice-banners/e1476e0e049495cbfc74fee2175985e60f6ad688_1691258457.jpg?x-oss-process=image/quality,q_95/format,webp" alt="banner" /></SwiperSlide>
        </Swiper>
        <div className="w-full h-auto mt-16 grid grid-cols-12 gap-y-10 gap-x-6">
          <div className="col-span-6 cursor-pointer lg:col-span-3 flex flex-col justify-center items-center">
            <NavLink to={"/phone"} className='flex flex-col items-center'>
              <div className="w-40 h-40 relative bg-slate-50  ring-2 ring-slate-600 flex justify-center items-center rounded-full shadow-xl shadow-slate-500 ">
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
              <div className="w-40 h-40 relative  bg-slate-50  ring-2 ring-slate-600 flex justify-center items-center rounded-full shadow-xl shadow-slate-500 ">
                <div className='w-20 h-20 absolute rounded-full -top-3 -right-3 bg-white ring-2 ring-slate-500'>
                  <img src="https://my.uupload.ir/dl/wZ21EgZB" alt="phone"/>
                </div>
                <img className='object-cover' src="https://my.uupload.ir/dl/EOgBrpWp" alt="laptop" />
              </div>
              <span className="text-xs md:text-sm  mt-2">لپ تاپ</span>
            </NavLink>
          </div>
          <div className="col-span-6 cursor-pointer lg:col-span-3 flex flex-col justify-center items-center">
            <NavLink to={"/watch"} className='flex flex-col items-center'>
              <div className="w-40 h-40 relative  bg-slate-50  ring-2 ring-slate-600 flex justify-center items-center rounded-full shadow-xl shadow-slate-500 ">
                <div className='w-20 h-20 absolute rounded-full -top-3 -right-3 bg-white ring-2 ring-slate-500'>
                  <img src="https://my.uupload.ir/dl/EOgen710" alt="" />
                </div>
                <img className=' object-cover' src="https://my.uupload.ir/dl/5L5jga4e" alt="watch" />
              </div>
              <span className="text-xs md:text-sm  mt-2">ساعت هوشمند</span>
            </NavLink>
          </div>
          <div className="col-span-6 cursor-pointer lg:col-span-3 flex flex-col justify-center items-center">
            <div className="w-40 h-40  bg-slate-50 relative  ring-2 ring-slate-600 flex justify-center items-center rounded-full shadow-xl shadow-slate-500 ">
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
            <Swiper
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                470: {
                  slidesPerView: 2,
                },
                620: {
                  slidesPerView: 2.5,
                },
                760: {
                  slidesPerView: 3.4,
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
              modules={[FreeMode, Pagination, Autoplay]}
              className="mySwiper h-full "
            >
              <SwiperSlide>
                <div className="col-span-3 md:col-span-2 h-full bg-red-500 flex flex-col justify-center items-center">
                  <img className="w-32 h-24" src="https://www.digikala.com/statics/img/svg/specialCarousel/Amazings.svg" alt="svg" />
                  <img className="w-36" src="https://www.digikala.com/statics/img/png/specialCarousel/box.webp" alt="box" />
                </div>
              </SwiperSlide>
              {filteredProducts.map((product) => {
                return <SwiperSlide key={product.id} className='w-full h-full border-r-2 border-solid border-red-500 cursor-pointer hover:shadow-xl hover:shadow-red-500 hover:transition-all hover:duration-300 ' >
                  <NavLink to={product.to}>
                    <div className="flex justify-between items-center flex-col h-full py-2 pb-6 px-4 text-sm md:text-base">
                      <img className="w-40 h-40 bg-white object-cover " src={product.image} alt={product.name} />
                      <span className='text-[10px] md:text-xs  text-slate-600'>{product.name}</span>
                      <div className='flex justify-between w-full mt-4'>
                        <span className='w-9 h-5 flex justify-center items-center text-xs md:text-sm text-white bg-red-500 rounded-full'>{product.discount}</span>
                        <span className='block text-slate-600 text-xs md:text-base'>{product.price.toLocaleString()} تومان </span>
                      </div>
                      <span className='w-full flex justify-end text-slate-400 line-through mt-2 text-sm'>{product.offPrice.toLocaleString()}</span>
                    </div>
                  </NavLink>
                </SwiperSlide>
              })}
            </Swiper>
          </div>
        </div>
      </div>
      <Footer />
      <FooterMenu />
    </div>
  );
}
export default Home;