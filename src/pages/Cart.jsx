import Layout from "../Layout/Layout";
import { UseCart, CartActions } from "../context/CartProvider";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { AiOutlineRight, AiOutlineSafety, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { IoExitOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { FaClipboardCheck, FaRegTrashAlt } from "react-icons/fa";
import { PiArticleNyTimes } from "react-icons/pi";



const Cart = () => {
  const { cart } = UseCart();
  const dispatch = CartActions();

  const handleInc = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item })
  }
  const handleDec = (item) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item })
  }
  return (
    <Layout>
      <main className="col-span-12 md:col-span-9 flex flex-col">
        {/* ---------------------------phone size------------------------ */}
        <div className="flex justify-between md:hidden px-2 mb-2">
          <NavLink to={'../'}>
            <AiOutlineRight className="text-3xl p-1 bg-white rounded-lg text-slate-600 cursor-pointer" />
          </NavLink>
          <span>سبد خرید شما</span>
          <BiDotsVerticalRounded className="text-3xl p-1 bg-white rounded-lg text-slate-600 cursor-pointer " />
        </div>
        {/* -----------------------------desktop size--------------------- */}
        <div className="w-full hidden md:flex justify-between text-slate-700 pr-8 pl-28 mt-2 bg-white py-4 rounded-lg">
          <span>سبد خرید شما</span>
          <NavLink to={'../'}>
            <div className="flex items-center cursor-pointer">
              <IoExitOutline className="text-2xl ml-2 text-red-600" />
              <span>بازگشت به خانه</span>
            </div>
          </NavLink>
        </div>
        <div className="w-full h-auto flex gap-2">
          {/* ---------------------------------items -------------------------- */}
          <div className="w-full h-auto lg:max-h-[78vh] mt-2 bg-white p-1 rounded-lg grid grid-cols-12 lg:w-2/3 lg:overflow-scroll ">
            {cart.length ? cart.map((item) => {
              console.log(item.price)
              // -------------------single item--------------------------------------
              return <div className="col-span-12 grid grid-cols-12 gap-1 py-4 border-b-2 border-solid ">
                {/* -------------img--------------------------- */}
                <div className="col-span-4 p-2 bg-white">
                  <img src={item.image} alt={item.name} />
                </div>
                {/* -------descriptions----------------------- */}
                <div className="col-span-8 p-2 bg-white pt-6">
                  <h2 className="text-sm lg:text-base ">{item.name} {item.nameF}</h2>
                  <div>
                    <div className="flex items-center gap-2 mt-6 text-sm text-slate-500 ">
                      <div className={`w-5 h-5 ${item.selectedColor.val} rounded-full `}></div>
                      <span className="">{item.selectedColor.key}</span>
                    </div>
                    <div className="mt-3 text-xs text-slate-500  flex items-center">
                      <AiOutlineSafety className="text-xl ml-2" />
                      <span>{item.garanti}</span>
                    </div>
                    <div className="mt-3 text-xs  text-slate-500 flex items-center">
                      <FaClipboardCheck className="text-xl ml-2 text-cyan-600" />
                      <span>{item.existed}</span>
                    </div>
                    <div className="mt-3 text-xs text-slate-500  flex items-center relative">
                      <div className="w-[2px] h-7 bg-cyan-600 absolute top-3 right-[7px]"></div>
                      <div className="w-2 h-2 bg-cyan-600 rounded-full mr-1 ml-5"></div>
                      <img src={item.logo} className='w-5 h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 object-cover ml-2 ' alt="phone" />
                      <span>ارسال توسط دیجی تایز</span>
                    </div>
                    <div className="mt-3 text-xs text-slate-500  flex items-center">
                      <div className="w-2 h-2 bg-cyan-600 rounded-full mr-1 ml-5"></div>
                      <PiArticleNyTimes className="text-xl ml-2 text-blue-700" />
                      <span>ارسال فوری(تهران)</span>
                    </div>

                  </div>
                </div>

                {/*------------- total and price------------------ */}
                <div className="col-span-12 p-2 bg-white flex items-center mr-8">
                  <div className="w-24 flex justify-between items-center p-2 border-2 border-solid border-slate-300 rounded-lg text-orange-500">
                    <button onClick={() => handleInc(item)}><AiOutlinePlus /></button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleDec(item)} >{item.quantity > 1 ? <AiOutlineMinus /> : <FaRegTrashAlt className="text-red-500" />}</button>
                  </div>
                  <div className="mr-6 text-slate-500 text-xl">{item.price * item.quantity} تومان</div>
                </div>
              </div>
            }) : <p className="col-span-12">سبد خرید شما خالی است !</p>}
          </div>
          <div className="hidden lg:flex h-96 w-1/3 bg-white mt-8 border-2 border-solid rounded-lg flex-col justify-between p-4">
            <p>جمع قیمت سفارش ها :</p>
            <button className="w-full py-3 bg-orange-400 rounded-lg text-white">ثبت سفارش</button>
          </div>
        </div>

      </main>
    </Layout>
  );
}

export default Cart;