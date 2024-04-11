import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-[#E6EEFF] h-[70px] rounded-t-2xl p-4 flex justify-between">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full relative">
          <Image
            src="/robot-img.jpg"
            alt="robot img"
            fill
            className="rounded-full"
          />
        </div>
        <div className="text-blue-500">
          <h1 className="font-semibold">Timpu 🪙</h1>
          <h2 className="text-sm">Chat assistant</h2>
        </div>
      </div>
      <div className="flex items-center gap-2 self-end">
        <div className="w-2 h-2 rounded-full bg-green-500"></div>
        <span className="text-blue-500 text-sm">Online</span>
      </div>
    </div>
  );
};

export default Header;
