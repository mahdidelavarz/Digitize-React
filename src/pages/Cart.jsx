import Layout from "../Layout/Layout";
import { UseCart } from "../context/CartProvider";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { AiOutlineRight } from "react-icons/ai";
import { IoExitOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
const Cart = () => {
 const { cart } = UseCart();
 console.log(cart);
 return (
  <Layout>
   <main className="col-span-12 md:col-span-9 flex flex-col items-center">
    <div className="w-full h-auto md:mt-4  flex flex-col px-10">
     {/* ---------------------------phone size------------------------ */}
     <div className="flex justify-between md:hidden">
      <NavLink to={'../'}>
       <AiOutlineRight className="text-3xl p-1 bg-white rounded-lg text-slate-600 cursor-pointer" />
      </NavLink>
      <span>سبد خرید شما</span>
      <BiDotsVerticalRounded className="text-3xl p-1 bg-white rounded-lg text-slate-600 cursor-pointer " />
     </div>
     {/* -----------------------------desktop size--------------------- */}
     <div className="w-full hidden md:flex justify-between text-slate-700">
      <span>سبد خرید شما</span>
      <NavLink to={'../'}>
       <div className="flex items-center cursor-pointer">
        <IoExitOutline className="text-2xl ml-2 text-red-600" />
        <span>بازگشت به خانه</span>
       </div>
      </NavLink>
     </div>
    </div>
    {/* ---------------------------------items -------------------------- */}
    <div className="w-full h-auto  bg-white mt-8  p-3 rounded-lg">
     {cart.length ? cart.map((item) => {
      // -------------------single item--------------------------------------
      return <div className="w-full grid grid-cols-12 gap-1">
       {/* -------------img--------------------------- */}
       <div className="col-span-4 p-2 bg-slate-200">
        <img src={item.image} alt={item.name} />
       </div>
       {/* -------descriptions----------------------- */}
       <div className="col-span-8 p-2 bg-slate-200">
        <h2 className="text-sm lg:text-base ">{item.name} {item.nameF}</h2>
        <div>
         <div><span>{item.color}</span></div>
         <div><span>garanty</span></div>
         <div><span>exsist in inventory</span></div>
         <div><span>send by digitize</span></div>
         <div><span>send emidietly from tehran</span></div>
        </div>
       </div>
       {/*------------- total and price------------------ */}
       <div className="col-span-12 p-2 bg-slate-200">
        price
       </div>
      </div>
     }) : <p>سبد خرید شما خالی است !</p>}

    </div>

   </main>
  </Layout>
 );
}

export default Cart;