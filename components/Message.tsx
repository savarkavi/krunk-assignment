import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

const Message = ({
  message,
  time,
  color,
  className,
  withImage,
}: {
  message: string;
  time: string;
  color: string;
  className?: string;
  withImage?: boolean;
}) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <div
        className={`${color} p-3 text-[12px] rounded-xl max-w-[230px] text-zinc-800`}
      >
        {withImage && (
          <div className="w-full bg-white rounded-xl mb-4 p-2 flex items-center gap-4">
            <Image src="/handbag.jpg" alt="handbag" width={50} height={50} />
            <div className="flex flex-col gap-3">
              <p className="font-semibold">Bags on Timpu 🪙</p>
              <div className="flex items-center gap-4">
                <span className="text-gray-500">1123 Products</span>
                <IoIosArrowForward className="text-gray-500" />
              </div>
            </div>
          </div>
        )}
        <p>{message}</p>
      </div>
      <p
        className={`text-[12px] text-zinc-800 ml-4 ${
          className === "self-end" && "self-end ml-0 mr-4"
        }`}
      >
        {time}
      </p>
    </div>
  );
};

export default Message;
