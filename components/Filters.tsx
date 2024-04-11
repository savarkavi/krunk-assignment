import { GiSettingsKnobs } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Filters = () => {
  return (
    <div className="px-4">
      <div className="text-sm text-gray-500 flex justify-between">
        <p>Select filters</p>
        <div className="flex items-center gap-2">
          <GiSettingsKnobs className="rotate-90 text-black" />
          <span>Filter</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mt-3">
        <div className="border border-blue-500 py-1 px-3 rounded-lg bg-blue-50 flex-shrink-0 flex items-center gap-2">
          <p className="text-[12px] text-blue-500">Strap-Long</p>
          <IoMdClose />
        </div>

        <div className="py-1 px-3 rounded-lg bg-gray-200 flex-shrink-0 flex items-center gap-2">
          <p className="text-[12px] ">Color</p>
          <IoMdClose />
        </div>

        <div className="py-1 px-3 rounded-lg bg-gray-200 flex-shrink-0 flex items-center gap-2">
          <p className="text-[12px] ">Size</p>
          <IoMdClose />
        </div>

        <div className="py-1 px-3 rounded-lg bg-gray-200 flex-shrink-0 flex items-center gap-2">
          <p className="text-[12px] ">Brand</p>
          <IoMdClose />
        </div>
      </div>
    </div>
  );
};

export default Filters;
