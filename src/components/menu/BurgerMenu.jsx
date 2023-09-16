import { GiCrossMark } from "react-icons/gi";
import { slide as Menu } from 'react-burger-menu'
import { useState } from "react";
import Links from "../links/Links";
const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu right isOpen={isOpen} className="w-[70vw] bg-slate-300 fixed top-0 right-0">
      <div className={`h-full bg-slate-300 `}>
        {/* ---------------------- header of the menu ------------------------------- */}
        <div className="w-full h-20 bg-gradient-to-r from-slate-500 flex items-center justify-end ">
          <GiCrossMark onClick={() => setIsOpen(false)} className=" text-[35px] text-white ml-6 cursor-pointer hover:text-red-300 transition-all duration-700" />
        </div>
        <div>
          {/* -------------------- items of the menu --------------------------------- */}
          <ul className='w-full  flex flex-col  px-4 '>
            <Links iconStyle="text-orange-400 text-2xl xl:text-2xl ml-4" backStyle="bg-gradient-to-l from-slate-400" width="full mt-6"/>
          </ul>
        </div>
      </div>
    </Menu>
  );
}

export default BurgerMenu;