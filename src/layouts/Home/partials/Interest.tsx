"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Interest = () => {
  const router = useRouter();
  return (
    <div className="relative bg-[#0E191F] w-full min-h-[109px] py-[14px] pr-[14px] pl-[27px] rounded-2xl">
      <div className="mb-[28px] flex items-center justify-between">
        <h6 className="text-[14px] text-white font-bold">Interest</h6>
        <div className="flex items-end flex-col">
          <Image
            src="/icons/pencil-ic.svg"
            height={17}
            width={17}
            quality={100}
            alt="pencil"
            onClick={() => router.push("/interest")}
          />
        </div>
      </div>
      <h6 className="text-[14px] leading-normal text-[#ffffff85]">
        Add in your interest to find a better match
      </h6>
      {/* <div className="flex flex-wrap gap-3">
        <div className="bg-[#ffffff0f] rounded-[100px] min-h-[33px] py-2 px-4 flex items-center justify-center text-white text-[14px] font-semibold">
          Music
        </div>
        <div className="bg-[#ffffff0f] rounded-[100px] min-h-[33px] py-2 px-4 flex items-center justify-center text-white text-[14px] font-semibold">
          Fitness
        </div>
        <div className="bg-[#ffffff0f] rounded-[100px] min-h-[33px] py-2 px-4 flex items-center justify-center text-white text-[14px] font-semibold">
          Basketball
        </div>
        <div className="bg-[#ffffff0f] rounded-[100px] min-h-[33px] py-2 px-4 flex items-center justify-center text-white text-[14px] font-semibold">
          Gymming
        </div>
      </div> */}
    </div>
  );
};

export default Interest;
