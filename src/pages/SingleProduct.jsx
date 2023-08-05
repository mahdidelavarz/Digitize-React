
import * as data from '../data'
import Layout from "../Layout/Layout";
import { useParams } from "react-router-dom";
import { useState } from 'react';
import { BsCheck, BsFillShareFill } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineSafety } from "react-icons/ai";
import { PiBellRinging } from "react-icons/pi";
import { BiMessageDetail, BiStore } from "react-icons/bi";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaTruckPlane } from "react-icons/fa6";
import { UseCart, CartActions } from "../context/CartProvider";
import { toast } from 'react-toastify';


const SingleProduct = () => {
  const { id } = useParams();
  const product = data.products
    .filter((p) => parseInt(p.id) === parseInt(id))
    .reduce((key, value) => {
      key[value] = key;
      return value;
    }, {});

  const [selected, setSelected] = useState({ key: 'مشکی', val: 'bg-black' });
  const { cart } = UseCart();
  const dispatch = CartActions();

  const handleSelect = (key, val) => {
    setSelected({ key, val });
  }
  const handleAddToCart = () => {
    toast.success(`به سبدخرید اضافه شد`)
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, selectedColor: selected } })
  }
  const checkInCart = (cart, product) => {
    return cart.find((item) => item.id === product.id);

  }
  const handleLike = () => {
    toast.success(`به علاقمندی ها اضافه شد`)
  }
  return (
    <Layout>
      <section className="w-full col-span-12 md:col-span-9 h-auto  relative grid grid-cols-12 md:grid-rows-12 bg-white p-2 rounded-lg items-center z-20">
        {/* ----------------------------items image--------------------------- */}
        <div className="h-full col-span-12 md:col-span-7 lg:col-span-4 relative flex items-center flex-col justify-evenly z-30">
          <div className="flex justify-end absolute right-[-15px] top-0 p-4 flex-col ">
            <AiOutlineHeart onClick={handleLike} className="ml-5 text-2xl text-indigo-900 hover:text-rose-500 cursor-pointer transition-all duration-300" />
            <BsFillShareFill className="ml-5 mt-5 text-2xl text-indigo-900 hover:text-rose-500 cursor-pointer transition-all duration-300" />
            <PiBellRinging className="ml-5 mt-5 text-2xl text-indigo-900 hover:text-rose-500 cursor-pointer transition-all duration-300" />
            <BiMessageDetail className="ml-5 mt-5 text-2xl text-indigo-900 hover:text-rose-500 cursor-pointer transition-all duration-300" />
            <TfiMenuAlt className="ml-5 mt-5 text-2xl text-indigo-900 hover:text-rose-500 cursor-pointer transition-all duration-300" />
          </div>
          <img src={product.image} alt={product.name} className="object-cover mr-8 md:mt-2 md:mr-3" />
          <div className="lg:flex mt-4 hidden col-span-4 ">
            <div className="w-1/3 p-2 border-2 border-slate-400 m-1 rounded-md cursor-pointer object-cover "> <img className="w-full h-full" src={product.image} alt={product.name} /> </div>
            <div className="w-1/3 p-2 border-2 border-slate-400 m-1 rounded-md  cursor-pointer object-cover"><img className="w-full h-full" src={product.image} alt={product.name} /></div>
            <div className="w-1/3 p-2 border-2 border-slate-400 m-1 rounded-md  cursor-pointer object-cover"><img className="w-full h-full" src={product.image} alt={product.name} /></div>
          </div>
        </div>
        {/* -----------------------------items details------------------------ */}
        <div className="col-span-12  md:col-span-5 lg:col-span-4  flex flex-col md:h-full md:justify-evenly">
          <h1 className=" text-xl mt-8 md:text-base text-slate-500">{product.name}</h1>
          <h1 className="text-xl mt-2 md:text-base text-slate-500">{product.nameF}</h1>
          <div className="mt-8">
            <p className="text-slate-600">انتخاب رنگ :</p>
            <div className="w-full flex gap-1 mt-4 ">
              {Object.entries(product.colors).map(([key, val]) => {
                return <div key={key} onClick={() => handleSelect(key, val)} className={`${selected.key === key ? 'ring-2 ring-orange-500  border-2 border-white' : ''} ${val === 'bg-white' && ' ring-black border-2 border-solid border-slate-500 rounded-full'} w-6 h-6 ${val} rounded-full cursor-pointer flex justify-center items-center ml-4`}>
                  <BsCheck className={`${selected.key === key ? 'flex' : 'hidden'} ${val === 'bg-white' ? 'text-black ' : 'text-white'} text-xl`} />
                </div>
              })}
            </div>
          </div>
          {/* <!-- !...................................Attributes  (mobile)............................................... --> */}
          <div className="w-full h-36 flex flex-col items-end mt-7 p-2  overflow-hidden mb-4 rounded-md lg:hidden border-2 border-solid">
            <span className="mb-3 bold text-base text-slate-900 flex justify-start w-full">ویژگی های کالا :</span>
            <div className="w-full flex relative mr-20 flex-col">
              <div className="w-3 h-3 rounded-full bg-red-500 top-1 absolute mr-10"></div>
              <span className="flex px-5 text-sm text-slate-700 mr-10">حافظه داخلی : 128 GB</span>
              <div className="w-3 h-3 rounded-full bg-red-500 top-7 absolute mr-10"></div>
              <span className="flex px-5 text-sm text-slate-700 mr-10"> حافظه رم : 8 GB</span>
            </div>
            <span className="flex w-full justify-start flex-row-reverse text-sm text-orange-600 cursor-pointer mt-4 ">ادامه
              مطلب</span>
          </div>
          {/* <!-- !...................................Attributes  (Desktop)............................................... --> */}
          <div className="w-60 h-auto bg-white lg:flex flex-col mt-5 overflow-hidden mb-4 rounded-md col-span-2 lg:text-sm hidden items-center">
            <span className="mb-3 bold text-base text-slate-900 flex justify-start w-full">ویژگی های کالا :</span>
            <div className="w-full flex relative mr-5 flex-col">
              <div className="w-3 h-3 rounded-full bg-red-500 top-1 absolute mr-2"></div>
              <span className="flex px-2 text-slate-900 mr-5 justify-start"> حافظه داخلی : </span>
              <span className="text-slate-500 p-2 mr-8 flex justify-start">128 گیگابایت</span>
              <div className="w-3 h-3 rounded-full bg-red-500 top-[3.7rem] absolute mr-2"></div>
              <span className="flex px-2 text-slate-900 mr-5 justify-start"> حافظه رم : </span>
              <span className="text-slate-500 p-2 mr-8 flex justify-start"> 12 گیگابایت</span>
              <div className="w-3 h-3 rounded-full bg-red-500 top-[7.2rem] absolute mr-2"></div>
              <span className="flex px-2 text-slate-900 mr-5 justify-start"> بازه ی اندازه ی صفحه نمایش : </span>
              <span className="text-slate-500 p-2 mr-8 flex justify-start"> .6 اینچ و بزرگتر</span>
              <div className="w-3 h-3 rounded-full bg-red-500 top-[10.7rem] absolute mr-2"></div>
              <span className="flex px-2 text-slate-900 mr-5 justify-start"> شبکه های ارتباطی :</span>
              <ul className="flex justify-evenly">
                <li className="text-slate-500 p-2 ">
                  <span>2G</span>
                </li>
                <li className="text-slate-500 p-2 ">
                  <span>3G</span>
                </li>
                <li className="text-slate-500 p-2 ">
                  <span>4G</span>
                </li>
                <li className="text-slate-500 p-2 ">
                  <span>5G</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* ------------------------------add to cart div--------------------- */}
        <div className="h-full col-span-12 lg:col-span-4 flex flex-col items-center md:px-6 md:bg-slate-100 py-4 rounded-xl justify-between">
          <div className="w-full flex relative">
            <div className="w-6 h-6 bg-slate-300 rounded-full absolute top-0 right-3"></div>
            <AiOutlineSafety className=" z-30 mr-5 text-2xl mt-2" />
            <div className="w-full mt-2 mr-2 flex justify-between">
              <span className="lg:text-sm xl:text-base"> گارانتی:</span> <span className="text-slate-500 lg:text-sm xl:text-base"> 18 ماه زرین خدمت</span>
            </div>
          </div>
          <div className="w-full flex relative mt-4">
            <div className="w-6 h-6 bg-slate-300 rounded-full absolute top-0 right-3 z-0"></div>
            <BiStore className="z-30 mr-5 text-2xl mt-2" />
            <div className="w-full mt-2 mr-2 flex justify-between">
              <span className=" mr-2 lg:text-sm xl:text-base"> فروشنده :</span> <span className="text-slate-500 lg:text-sm xl:text-base"> دیجی تایز</span>
            </div>
          </div>
          <div className="w-full flex relative mt-4">
            <div className="w-6 h-6 bg-slate-300 rounded-full absolute top-0 right-3 z-0"></div>
            <FaTruckPlane className="z-30 mr-5 text-2xl mt-2" />
            <div className="w-full mt-2 mr-2 flex justify-between">
              <span className=" mr-2 lg:text-sm xl:text-base"> ارسال توسط : </span> <span className="text-slate-500 lg:text-sm xl:text-base"> انبار تهران</span>
            </div>
          </div>
          <div className="w-full flex md:flex-col flex-row-reverse justify-between md:justify-end md:items-end mt-6 fixed md:static bottom-0 bg-orange-100 md:bg-slate-100 px-8 py-4 md:p-0 rounded-t-[50px] md:rounded-none z-50 lg:z-30 items-center">
            <span className="text-orange-700  md:w-auto  text-xl lg:text-base xl:text-lg">{product.price} تومان</span>
            <button onClick={handleAddToCart} className=" w-1/2 md:w-full py-3 md:py-2  bg-orange-500 rounded-lg mt-2  text-white text-sm lg:text-base md:text-lg">{checkInCart(cart, product) ? 'در سبدخرید موجود است' : 'افزودن به سبدخرید'}</button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default SingleProduct;