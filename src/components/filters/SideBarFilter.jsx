import FilterOptions from "./FilterOptions";
const SideBarFilter = ({ category }) => {
  return (
    <FilterOptions
      category={category}
      classes="hidden md:flex col-span-3 row-span-2 bg-white rounded-l-xl max-h-[85vh] mt-2 overflow-scroll p-5 scrollbar-hide flex-col gap-8"
    />
  );
};

export default SideBarFilter;
