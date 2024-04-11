"use client";

import { IoIosArrowForward } from "react-icons/io";

const PopularTags = () => {
  return (
    <div>
      <div>
        <p className="text-sm text-gray-500 mb-4">Popular tags for handbag</p>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-3 overflow-x-hidden">
            <div className="border border-blue-500 py-1 px-3 rounded-lg bg-blue-50 flex-shrink-0">
              <p className="text-[12px] text-blue-500">Clutch</p>
            </div>
            <div className="border border-blue-500 py-1 px-3 rounded-lg bg-blue-50 flex-shrink-0">
              <p className="text-[12px] text-blue-500">Fabric Lining</p>
            </div>
            <div className="border border-blue-500 py-1 px-3 rounded-lg bg-blue-50 flex-shrink-0">
              <p className="text-[12px] text-blue-500">Baggit</p>
            </div>
            <div className="border border-blue-500 py-1 px-3 rounded-lg bg-blue-50 flex-shrink-0">
              <p className="text-[12px] text-blue-500">Multimedia Layer</p>
            </div>
          </div>
          <IoIosArrowForward className="text-blue-500 text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default PopularTags;
