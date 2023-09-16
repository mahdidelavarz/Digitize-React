import { HiOutlineColorSwatch } from "react-icons/hi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { BsCaretDownFill, BsHeartHalf } from "react-icons/bs";
import { CiWallet } from "react-icons/ci";
import { useState } from "react";
import Links from "./links/Links";

const SideBar = () => {
  const [activeBrand, setActiveBrand] = useState(false);
  const [activeColor, setActiveColor] = useState(false);
  const [activePrice, setActivePrice] = useState(false);
  const [brandSort, setBrandSort] = useState(0);
  const [colorSort, setColorSort] = useState(0);
  const [priceSort, setPriceSort] = useState(0);
  return (
    <div className=" hidden md:block col-span-3 row-span-2 bg-white rounded-l-xl max-h-[85vh] mt-2 overflow-scroll p-5 scrollbar-hide">
      <ul className="w-full  flex flex-col  xl:px-4 ">
        <li className="mt-5 text-lg text-orange-500">دسته بندی</li>
        <Links
          iconStyle="text-orange-500 text-xl xl:text-2xl ml-2 lg:ml-4"
          backStyle="bg-gradient-to-l from-slate-300"
          width="full mt-6"
        />
        <li className="mt-16 text-lg text-orange-400">فیلتر</li>
        <div className="w-full h-auto mt-6">
          <div
            onClick={() => setActiveBrand(!activeBrand)}
            className=" w-full h-12  text-lg text-slate-600 lg:px-4 cursor-pointer flex items-center mt-6 hover:bg-gradient-to-l from-slate-200 rounded-md transition-all duration-500"
          >
            <div className="w-full relative flex">
              <div className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 bg-gradient-to-l from-slate-300 absolute top-[-4px] right-[-5px] lg:top-[-5px] lg:right-[-10px] rounded-full z-0"></div>
              <HiOutlineBuildingOffice2 className="text-orange-400 text-xl xl:text-2xl ml-2 lg:ml-4" />
              <span className="text-xs lg:text-base">برند محصول</span>
            </div>
            <BsCaretDownFill
              className={`text-xs lg:text-sm transition-all duration-300 ${
                activeBrand && "rotate-180"
              }`}
            />
          </div>
          <div
            className={`transition-all duration-300 w-full ${
              activeBrand ? "flex" : "hidden"
            }`}
          >
            <div className={`flex`}>
              <ul className="pr-7 py-3 lg:pr-10">
                <li onClick={() => setBrandSort(1)} className="py-1 flex">
                  <div
                    className={`w-4 h-4 border border-orange-200 rounded-sm ml-2 cursor-pointer ${
                      brandSort === 1 ? "bg-orange-300" : "bg-white"
                    }`}
                  ></div>
                  <span className="cursor-pointer text-gray-700 text-xs lg:text-sm ">
                    اپل
                  </span>
                </li>
                <li onClick={() => setBrandSort(2)} className="py-1 flex">
                  <div
                    className={`w-4 h-4 border border-orange-200 rounded-sm ml-2 cursor-pointer ${
                      brandSort === 2 ? "bg-orange-300" : "bg-white"
                    }`}
                  ></div>
                  <span className="cursor-pointer text-gray-700 text-xs lg:text-sm ">
                    سامسونگ
                  </span>
                </li>
                <li onClick={() => setBrandSort(3)} className="py-1 flex">
                  <div
                    className={`w-4 h-4 border border-orange-200 rounded-sm ml-2 cursor-pointer ${
                      brandSort === 3 ? "bg-orange-300" : "bg-white"
                    }`}
                  ></div>
                  <span className="cursor-pointer text-gray-700 text-xs lg:text-sm ">
                    شیایومی
                  </span>
                </li>
                <li onClick={() => setBrandSort(4)} className="py-1 flex">
                  <div
                    className={`w-4 h-4 border border-orange-200 rounded-sm ml-2 cursor-pointer ${
                      brandSort === 4 ? "bg-orange-300" : "bg-white"
                    }`}
                  ></div>
                  <span className="cursor-pointer text-gray-700 text-xs lg:text-sm ">
                    هواوی
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full h-auto mt-6">
          <div
            onClick={() => setActiveColor(!activeColor)}
            className=" w-full h-12  text-lg text-slate-600 lg:px-4 cursor-pointer flex items-center mt-6 hover:bg-gradient-to-l from-slate-200 rounded-md transition-all duration-500"
          >
            <div className="w-full relative flex">
              <div className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 bg-gradient-to-l from-slate-300 absolute top-[-4px] right-[-5px] lg:top-[-5px] lg:right-[-10px] rounded-full z-0"></div>
              <HiOutlineColorSwatch className="text-orange-400 text-xl xl:text-2xl ml-2 lg:ml-4" />
              <span className="text-xs lg:text-base">رنگ محصول</span>
            </div>
            <BsCaretDownFill
              className={`text-xs lg:text-sm transition-all duration-300 ${
                activeColor && "rotate-180"
              }`}
            />
          </div>
          <div
            className={`transition-all duration-300 w-full ${
              activeColor ? "flex" : "hidden"
            }`}
          >
            <div className={`flex`}>
              <ul className="pr-7 py-3 lg:pr-10">
                <li onClick={() => setColorSort(1)} className="py-1 flex">
                  <div
                    className={`w-4 h-4 border border-orange-200 rounded-sm ml-2 cursor-pointer ${
                      colorSort === 1 ? "bg-orange-300" : "bg-white"
                    }`}
                  ></div>
                  <span className="cursor-pointer text-gray-700 text-xs lg:text-sm ">
                    مشکی
                  </span>
                </li>
                <li onClick={() => setColorSort(2)} className="py-1 flex">
                  <div
                    className={`w-4 h-4 border border-orange-200 rounded-sm ml-2 cursor-pointer ${
                      colorSort === 2 ? "bg-orange-300" : "bg-white"
                    }`}
                  ></div>
                  <span className="cursor-pointer text-gray-700 text-xs lg:text-sm ">
                    سفید
                  </span>
                </li>
                <li onClick={() => setColorSort(3)} className="py-1 flex">
                  <div
                    className={`w-4 h-4 border border-orange-200 rounded-sm ml-2 cursor-pointer ${
                      colorSort === 3 ? "bg-orange-300" : "bg-white"
                    }`}
                  ></div>
                  <span className="cursor-pointer text-gray-700 text-xs lg:text-sm ">
                    آبی
                  </span>
                </li>
                <li onClick={() => setColorSort(4)} className="py-1 flex">
                  <div
                    className={`w-4 h-4 border border-orange-200 rounded-sm ml-2 cursor-pointer ${
                      colorSort === 4 ? "bg-orange-300" : "bg-white"
                    }`}
                  ></div>
                  <span className="cursor-pointer text-gray-700 text-xs lg:text-sm ">
                    قرمز
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full h-auto mt-6">
          <div
            onClick={() => setActivePrice(!activePrice)}
            className=" w-full h-12  text-lg text-slate-600 lg:px-4 cursor-pointer flex items-center mt-6 hover:bg-gradient-to-l from-slate-200 rounded-md transition-all duration-500"
          >
            <div className="w-full relative flex">
              <div className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 bg-gradient-to-l from-slate-300 absolute top-[-4px] right-[-5px] lg:top-[-5px] lg:right-[-10px] rounded-full z-0"></div>
              <CiWallet className="text-orange-400 text-xl xl:text-2xl ml-2 lg:ml-4" />
              <span className="text-xs lg:text-base">محدوده قیمت</span>
            </div>
            <BsCaretDownFill
              className={`text-xs lg:text-sm transition-all duration-300 ${
                activePrice && "rotate-180"
              }`}
            />
          </div>
          <div
            className={`transition-all duration-300 w-full ${
              activePrice ? "flex" : "hidden"
            }`}
          >
            <div className={`flex`}>
              <ul className="pr-7 py-3 lg:pr-10">
                <li onClick={() => setPriceSort(1)} className="py-1 flex">
                  <div
                    className={`w-4 h-4 border border-orange-200 rounded-sm ml-2 cursor-pointer ${
                      priceSort === 1 ? "bg-orange-300" : "bg-white"
                    }`}
                  ></div>
                  <span className="cursor-pointer text-gray-700 text-xs lg:text-sm ">
                    کمتر از 1 میلیون تومان
                  </span>
                </li>
                <li onClick={() => setPriceSort(2)} className="py-1 flex">
                  <div
                    className={`w-4 h-4 border border-orange-200 rounded-sm ml-2 cursor-pointer ${
                      priceSort === 2 ? "bg-orange-300" : "bg-white"
                    }`}
                  ></div>
                  <span className="cursor-pointer text-gray-700 text-xs lg:text-sm ">
                    1 الی 5 میلیون تومان
                  </span>
                </li>
                <li onClick={() => setPriceSort(3)} className="py-1 flex">
                  <div
                    className={`w-4 h-4 border border-orange-200 rounded-sm ml-2 cursor-pointer ${
                      priceSort === 3 ? "bg-orange-300" : "bg-white"
                    }`}
                  ></div>
                  <span className="cursor-pointer text-gray-700 text-xs lg:text-sm ">
                    5 الی 10 میلیون تومان
                  </span>
                </li>
                <li onClick={() => setPriceSort(4)} className="py-1 flex">
                  <div
                    className={`w-4 h-4 border border-orange-200 rounded-sm ml-2 cursor-pointer ${
                      priceSort === 4 ? "bg-orange-300" : "bg-white"
                    }`}
                  ></div>
                  <span className="cursor-pointer text-gray-700 text-xs lg:text-sm ">
                    بیش از 10 میلیون تومان
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default SideBar;
