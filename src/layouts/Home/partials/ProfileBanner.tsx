import { useProfileContext } from "@/contexts/Profile";
import { calculateAge, getSigns } from "@/utils/Moment";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const ProfileBanner = () => {
  const { data: session } = useSession();
  const { state } = useProfileContext();
  return (
    <div className="relative bg-[#162329] w-full h-[190px] px-[14px] py-[8px] rounded-2xl">
      <div className="absolute flex flex-col bottom-[17px] left-[14px]">
        <span className="text-[16px] text-white mb-[6px] font-bold">
          @{session?.user?.username}
          {calculateAge(state.birthday) > 0
            ? `, ${calculateAge(state.birthday)}`
            : ""}
        </span>
        <span className="text-[13px] text-white leading-normal">Male</span>
        <div className="flex gap-[15px] items-center">
          {getSigns(state.birthday).zodiac && (
            <div className="mt-[12px] bg-[#ffffff0f] backdrop-blur-[25px] gap-2 rounded-[100px] py-[8px] px-[16px] flex justify-center items-center">
              <Image
                src="/icons/virgo-ic.svg"
                height={20}
                width={20}
                quality={100}
                alt={getSigns(state.birthday).zodiac}
              />
              <span className="text-white text-[14px] font-semibold">
                {getSigns(state.birthday).zodiac}
              </span>
            </div>
          )}
          {getSigns(state.birthday).horoscope && (
            <div className="mt-[12px] bg-[#ffffff0f] backdrop-blur-[25px] gap-2 rounded-[100px] py-[8px] px-[16px] flex justify-center items-center">
              <Image
                src="/icons/pig-ic.svg"
                height={20}
                width={20}
                quality={100}
                alt={getSigns(state.birthday).horoscope}
              />
              <span className="text-white text-[14px] font-semibold">
                {getSigns(state.birthday).horoscope}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
