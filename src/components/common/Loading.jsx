import createEmptyArray from "../../Utils/CreateEmptyArray";

export const HomeSkeleton = () => {
  return (
    <div className="w-full h-auto bg-white col-span-12 md:col-span-9 md:p-4 animate-pulse">
      <div className="w-full h-20 bg-slate-300 rounded-lg hidden md:flex"></div>
      <div className="w-full h-60 bg-slate-300 rounded-lg md:mt-8"></div>
      <div className="w-full h-96 md:h-72 bg-white grid grid-cols-12 justify-evenly  mt-5 md:mt-0">
        {createEmptyArray(4).map((i) => {
          return (
            <div className="col-span-6 md:col-span-3 flex justify-center items-center">
              <div className="w-36 h-36 rounded-full bg-slate-300 relative ">
                <div className="w-20 h-20 absolute -top-3 -right-3 bg-slate-300 ring ring-white rounded-full"></div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full h-60 bg-slate-300 rounded-lg mt-8"></div>
    </div>
  );
};

export const ProductSkeleton = () => {
  return (
    <div className="h-[26rem] pb-4 bg-slate-200 rounded-xl mt-4 shadow-lg flex flex-col p-3 gap-4 animate-pulse">
      <div className="w-full h-44 bg-slate-300 rounded-lg"></div>
      <div className="w-1/2 py-3 bg-slate-300 rounded-lg"></div>
      <div className="w-full h-20 bg-slate-300 rounded-lg"></div>
      <div className="w-full flex justify-between">
        <div className="w-32 py-2 bg-slate-300 rounded-lg"></div>
        <div className="w-10 py-2 bg-slate-300 rounded-lg"></div>
      </div>
    </div>
  );
};

export const InterestSkeleton = () => {
  return (
    <div className="col-span-12 gap-4 h-[auto] bg-slate-100 p-5 grid grid-cols-12  relative md:gap-y-2  animate-pulse">
      <div className="col-span-12 h-44 md:h-auto md:col-span-4 p-2 bg-slate-300 flex items-center rounded-tr-lg rounded-br-lg justify-center rounded-md "></div>
      <div className="col-span-12 md:col-span-8 px-6 py-6 rounded-md flex flex-col md:pl-32 gap-4">
        <div className="w-full h-10 bg-slate-300 rounded-lg"></div>
        <div className="w-40 h-6 bg-slate-300 rounded-lg"></div>
        <div className="w-48 h-6 bg-slate-300 rounded-lg"></div>
        <div className="w-56 h-6 bg-slate-300 rounded-lg"></div>
        <div className="w-52 flex justify-between">
          {createEmptyArray(4).map((i) => (
            <div className="w-8 h-8 bg-slate-300 rounded-full mt-2"></div>
          ))}
        </div>
        <div className="w-full h-10 flex justify-between items-center">
          <div className="md:w-36 w-20 h-10 bg-slate-300 rounded-lg"></div>
          <div className="md:w-72 w-60 h-10 bg-slate-300 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export const CartLoading = () => {
  return (
    <div className="col-span-12 gap-4  p-5 grid grid-cols-12  relative md:gap-y-2 bg-slate-50 animate-pulse ">
      <div className="col-span-4 p-2 bg-slate-300 flex items-center rounded-tr-lg rounded-br-lg justify-center rounded-md"></div>
      <div className="col-span-8 px-6 bg-slate-200 py-6 rounded-md flex flex-col md:pl-10 gap-4">
        <div className="w-full h-10 bg-slate-300 rounded-lg"></div>
        <div className="md:w-40 w-28 h-6 bg-slate-300 rounded-lg"></div>
        <div className="md:w-48 w-32 h-6 bg-slate-300 rounded-lg"></div>
        <div className="md:w-56 w-40 h-6 bg-slate-300 rounded-lg"></div>
        <div className="md:w-64 w-48 h-6 bg-slate-300 rounded-lg"></div>
      </div>
      <div className="col-span-4 h-10 md:flex justify-between items-center gap-4 hidden">
        <div className="w-36 h-10 bg-slate-300 rounded-lg"></div>
        <div className="w-72 h-10 bg-slate-300 rounded-lg"></div>
      </div>
    </div>
  );
};

export const SingleProductLoading = () => {
  return (
    <div className="col-span-12  h-auto md:h-[80vh]  relative grid grid-cols-12 md:grid-rows-12 bg-slate-100 py-2 px-6 rounded-lg items-center z-20 mt-4">
      <div className="h-full col-span-12 md:col-span-7 lg:col-span-4 relative flex items-center flex-col justify-evenly z-30 ">
        <div className="flex justify-end absolute right-0 top-4 p-4 flex-col bg-slate-300 h-48 rounded-lg"></div>
        <div className="w-80 h-72 bg-slate-300 absolute top-4 right-10 rounded-lg"></div>
        <div className="lg:flex mt-72 gap-4 mr-24 hidden">
          <div className="w-24 h-24 bg-slate-300 ring ring-slate-300 border-4 border-slate-100 rounded-lg"></div>
          <div className="w-24 h-24 bg-slate-300 ring ring-slate-300 border-4 border-slate-100  rounded-lg"></div>
          <div className="w-24 h-24 bg-slate-300 ring ring-slate-300 border-4 border-slate-100  rounded-lg"></div>
        </div>
      </div>
      <div className="col-span-12 h-auto   md:col-span-5 flex flex-col md:h-full md:justify-evenly md:mr-20 p-4 mt-80 md:mt-0 -z-20">
        <div className="w-full h-10 bg-slate-300 rounded-lg"></div>
        <div className="w-full h-16 flex gap-4 items-end">
          {createEmptyArray(4).map((i) => (
            <div
              className="w-6 h-6 rounded-full bg-slate-300"
              key={i.index}
            ></div>
          ))}
        </div>
        <div className="flex flex-col gap-3 mt-6 md:mt-0">
          {createEmptyArray(9).map((i) => (
            <div
              className="w-36 h-6 bg-slate-300 rounded-lg"
              key={i.index}
            ></div>
          ))}
        </div>
      </div>
      <div className="h-full col-span-12 lg:col-span-3 flex flex-col items-center md:px-6 py-9 rounded-xl justify-between gap-2">
        {createEmptyArray(4).map((i) => (
          <div
            className="w-full h-10 rounded-lg bg-slate-300"
            key={i.index}
          ></div>
        ))}
      </div>
    </div>
  );
};
