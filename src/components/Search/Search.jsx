import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import * as data from "../../data";
import { NavLink } from "react-router-dom";
const Search = () => {
  const [openWindow, setOpenWindow] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState();

  const handleSearchWindow = (e) => {
    setOpenWindow(true);
    const filteredItems = data.products.filter((item) =>
      item.name.includes(e.target.value)
    );
    setFilteredProducts(filteredItems);
  };
  return (
    <div className="flex relative ml-4">
      <FiSearch className="text-3xl absolute top-1 right-6  text-slate-500 cursor-pointer z-[70]" />
      <input
        type="text"
        className="w-[40vw] lg:w-[30vw] relative pr-10 pl-4 py-2 rounded-md shadow-md outline-none bg-slate-200 mr-4 z-[60]"
        placeholder=" جست و جوی نام محصول , نام برند و ..."
        onChange={handleSearchWindow}
      />
      {openWindow && (
        <>
          <div
            onClick={() => setOpenWindow(false)}
            className="w-[100vw] h-[100vh] bg-slate-500 fixed top-0 right-0 opacity-50 z-50"
          ></div>
          <div className="bg-white w-[40vw] h-[75vh] rounded-lg absolute top-24 z-[70] fadeShow p-6 ">
            <div>جست و جو برای ...</div>
            <div className=" w-full h-full overflow-y-scroll flex flex-col gap-4 px-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300">
              {filteredProducts.map((item) => {
                return (
                  <NavLink to={item.to}>
                    <div className="w-full h-auto border-b border-solid flex justify-between py-4">
                      <div className="w-32 ">
                        <img src={item.image} alt={item.category} />
                      </div>
                      <div className="w-2/3 flex items-center justify-center">
                        <p>{item.name}</p>
                      </div>
                    </div>
                  </NavLink>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Search;
