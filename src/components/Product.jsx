import { UseInterests, InterestsActions } from "../context/favorites/InterestsProvider";
import { PiStarFill } from "react-icons/pi";
import { BsBookmarkHeart , BsBookmarkHeartFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
const Product = ({ product }) => {
  const { interestList } = UseInterests();
  const dispatchInterest = InterestsActions();
  const handleLike = () => {
    dispatchInterest({ type: 'ADD_TO_INTERESTS', payload: { ...product } });
  }
  const checkInInterestList = (interestList, product) => {
    return interestList.find((item) => item.id === product.id);
  }
  return (
    <div className="h-auto pb-4 bg-slate-200 rounded-xl mt-4 shadow-lg hover:shadow-slate-400 transition-all duration-300  flex flex-col cursor-pointer relative">
      {/* like */}
      <button onClick={handleLike}>
        {checkInInterestList(interestList, product) ? <BsBookmarkHeartFill className={`text-3xl text-red-600 transition-all duration-500 absolute top-0 right-0`} /> :<BsBookmarkHeart className={` text-3xl  hover:text-red-600 transition-all duration-300 absolute top-0 right-0 text-red-400`} />}
      </button>
      <NavLink to={product.to} key={product.id} product={product}>
        {/* photo */}
        <div className='w-full md:h-[26vh] bg-slate-200 flex justify-center px-4 '>
          <img className='w-32 h-32 object-contain md:object-cover md:w-40 md:h-40' src={product.image} alt="phone" />
        </div>
        {/* free transport */}
        <div className='w-[6.3rem] md:w-32 flex  mt-4 px-2 bg-slate-300 rounded-lg mr-2  text-slate-600'>
          <img src={product.logo} className='w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 object-cover ' alt="phone" />
          <span className='text-slate-400  text-xs md:text-sm mr-2'>ارسال رایگان</span>
        </div>
        {/* title */}
        <div className='w-full px-4 mt-4 text-slate-600 text-xs md:text-sm'>
          <span> {product.name}</span>
          <span>{product.nameF}</span>
        </div>
        {/* add btn */}
        <div className='w-full flex justify-between text-[10px] md:text-xs px-4 mt-2 text-slate-600'>
          <span className='text-red-600'>{product.existed}</span>
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