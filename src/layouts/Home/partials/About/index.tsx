"use client";

import Image from "next/image";
import React, { useState } from "react";
import Form from "./Form";

const About = () => {
  const [isUpdateMode, setIsUpdateMode] = useState<boolean>(false);
  return (
    <div className="relative bg-[#0E191F] w-full min-h-[120px] py-[14px] pr-[14px] pl-[27px] rounded-2xl">
      <div className="mb-[33px] flex items-center justify-between">
        <h6 className="text-[14px] text-white font-bold">About</h6>
        <div className="flex items-end flex-col">
          {isUpdateMode ? (
            <button onClick={() => setIsUpdateMode(false)}>
              <h6 className="only-golden-gradient-text font-medium leading-normal text-[12px]">
                Save &amp; Update
              </h6>
            </button>
          ) : (
            <Image
              src="/icons/pencil-ic.svg"
              height={17}
              width={17}
              quality={100}
              alt="pencil"
              onClick={() => setIsUpdateMode(true)}
            />
          )}
        </div>
      </div>
      {isUpdateMode ? (
        <Form />
      ) : (
        <div className="flex flex-col gap-[15px]">
          {/* <h6 className="text-[14px] leading-normal text-[#ffffff85]">
            Add in your your to help others know you better
          </h6> */}
          <h6 className="leading-normal text-[#ffffff54] text-[13px]">
            Birthday:{" "}
            <span className="text-white">28 / 08 / 1995 (Age 28)</span>
          </h6>
          <h6 className="leading-normal text-[#ffffff54] text-[13px]">
            Horoscope: <span className="text-white">Virgo</span>
          </h6>
          <h6 className="leading-normal text-[#ffffff54] text-[13px]">
            Zodiac: <span className="text-white">Pig</span>
          </h6>
          <h6 className="leading-normal text-[#ffffff54] text-[13px]">
            Height: <span className="text-white">175cm</span>
          </h6>
          <h6 className="leading-normal text-[#ffffff54] text-[13px]">
            Weight: <span className="text-white">69kg</span>
          </h6>
        </div>
      )}
    </div>
  );
};

export default About;
