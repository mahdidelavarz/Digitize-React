import { PiStarFill } from "react-icons/pi";
import { BsBookmarkHeart } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
const Product = ({ product }) => {
  
  const handleLike = () => {
    toast.success(`به علاقمندی ها اضافه شد`)
    console.log(product)
  }
  return (
    <div className="h-auto pb-4 bg-slate-200 rounded-xl mt-4 shadow-lg hover:shadow-slate-400 transition-all duration-300  flex flex-col cursor-pointer relative">
      {/* like */}
        <button onClick={handleLike}>
          <BsBookmarkHeart  className=" text-3xl text-red-400  hover:text-red-600 transition-all duration-300 absolute top-0 right-0" />
        </button>
      <NavLink to={product.to} key={product.id} product={product}>
        {/* photo */}
        <div className='w-full h-[26vh] bg-slate-200 flex justify-center px-4 '>
          <img className='object-cover' src={product.image} alt="phone" />
        </div>
        {/* free transport */}
        <div className='w-[6.3rem] md:w-32 flex  mt-4 px-2 bg-slate-300 rounded-lg mr-2  text-slate-600'>
          <img src={product.logo} className='w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 object-cover ' alt="phone" />
          <span className='text-slate-400  text-xs md:text-sm mr-2'>ارسال رایگان</span>
        </div>
        {/* title */}
        <div className='w-full px-4 mt-4 text-slate-600 text-xs md:text-sm'>
          <span> ساعت هوشمند اپل واچ مدل ultra 49 mm Alpine loop </span>
        </div>
        {/* add btn */}
        <div className='w-full flex justify-between text-[10px] md:text-xs px-4 mt-2 text-slate-600'>
          <span className='text-red-600'>تنها 1 عدد در انبار باقی مانده</span>
          <span className='flex items-center'>
            4.2
            <PiStarFill className='text-yellow-500 text-base mr-2 mb-1' />
          </span>
        </div>
        {/* price */}
        <div className='w-full px-4 mt-5 flex justify-end text-slate-600 text-sm'>
          <span>{product.price} تومان</span>
        </div>
      </NavLink>
    </div>

  );
}

export default Product;