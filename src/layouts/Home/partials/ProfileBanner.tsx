import Image from "next/image";
import React from "react";

const ProfileBanner = () => {
  return (
    <div className="relative bg-[#162329] w-full h-[190px] px-[14px] py-[8px] rounded-2xl">
      {/* <div className="flex items-end flex-col">
          <Image
            src="/icons/pencil-ic.svg"
            height={17}
            width={17}
            quality={100}
            alt="pencil"
          />
        </div> */}
      <div className="absolute flex flex-col bottom-[17px] left-[14px]">
        <span className="text-[16px] text-white mb-[6px] font-bold">
          @johndoe, 23
        </span>
        <span className="text-[13px] text-white leading-normal">Male</span>
        <div className="flex gap-[15px] items-center">
          <div className="mt-[12px] bg-[#ffffff0f] backdrop-blur-[25px] gap-2 rounded-[100px] py-[8px] px-[16px] flex justify-center items-center">
            <Image
              src="/icons/virgo-ic.svg"
              height={20}
              width={20}
              quality={100}
              alt="virgo"
            />
            <span className="text-white text-[14px] font-semibold">Virgo</span>
          </div>
          <div className="mt-[12px] bg-[#ffffff0f] backdrop-blur-[25px] gap-2 rounded-[100px] py-[8px] px-[16px] flex justify-center items-center">
            <Image
              src="/icons/pig-ic.svg"
              height={20}
              width={20}
              quality={100}
              alt="pig"
            />
            <span className="text-white text-[14px] font-semibold">Pig</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
