import { IoIosArrowForward } from "react-icons/io";
import { ImAttachment } from "react-icons/im";

const Footer = () => {
  return (
    <div className="bg-[#E6EEFF] h-[70px] rounded-b-2xl p-4 mt-8 flex justify-between gap-4">
      <div className="relative w-full">
        <input
          placeholder="Type your message"
          className="py-2 px-3 outline-none bg-white text-[12px] rounded-lg w-full"
        />
        <ImAttachment className="absolute right-2 text-gray-600 top-1/2 -translate-y-1/2" />
      </div>
      <div className="bg-blue-500 py-2 px-4 rounded-lg">
        <IoIosArrowForward className="text-white text-xl" />
      </div>
    </div>
  );
};

export default Footer;
