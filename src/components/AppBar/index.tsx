"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Index = () => {
  const { back } = useRouter();
  return (
    <div className="mt-5 grid grid-cols-3 justify-items-stretch">
      <div className="justify-self-start">
        <button onClick={back} className="flex items-center gap-[10px]">
          <Image
            src="/icons/left-arrow-ic.svg"
            height={14}
            width={9}
            quality={100}
            alt="left-arrow"
          />
          <span className="text-[14px] font-bold text-white">Back</span>
        </button>
      </div>
      <div className="justify-self-center">
        <span className="text-[14px] font-semibold text-white">@johndoe</span>
      </div>
      <div className="justify-self-end self-center">
        <Image
          src="/icons/menu-ic.svg"
          height={21}
          width={21}
          quality={100}
          alt="left-arrow"
        />
      </div>
    </div>
  );
};

export default Index;
