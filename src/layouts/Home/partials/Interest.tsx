"use client";

import { useProfileContext } from "@/contexts/Profile";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Interest = () => {
  const router = useRouter();
  const { state, loading } = useProfileContext();
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
            onClick={() => router.push("/private/interest")}
          />
        </div>
      </div>
      {Array.isArray(state.interests) &&
        state.interests.length < 1 &&
        !loading && (
          <h6 className="text-[14px] leading-normal text-[#ffffff85]">
            Add in your interest to find a better match
          </h6>
        )}
      {Array.isArray(state.interests) &&
        state.interests.length > 0 &&
        !loading && (
          <div className="flex flex-wrap gap-3">
            {state.interests.map((interest, idx) => (
              <div
                key={`${interest}_${idx}`}
                className="bg-[#ffffff0f] rounded-[100px] min-h-[33px] py-2 px-4 flex items-center justify-center text-white text-[12px] font-semibold"
              >
                {interest}
              </div>
            ))}
          </div>
        )}
    </div>
  );
};

export default Interest;
