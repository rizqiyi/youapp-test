"use client";

import Image from "next/image";
import React, { useState } from "react";
import Form from "./Form";
import { useProfileContext } from "@/contexts/Profile";
import { calculateAge, formatDate, getSigns } from "@/utils/Moment";

const About = () => {
  const [isUpdateMode, setIsUpdateMode] = useState<boolean>(false);
  const { state, loading } = useProfileContext();

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
      {isUpdateMode && <Form />}
      {!isUpdateMode && !loading && (
        <div className="flex flex-col gap-[15px]">
          {state.isEmptyProfile ? (
            <h6 className="text-[14px] leading-normal text-[#ffffff85]">
              Add in your your to help others know you better
            </h6>
          ) : (
            <>
              <h6 className="leading-normal text-[#ffffff54] text-[13px]">
                Birthday:{" "}
                <span className="text-white">
                  {formatDate(state.birthday, "DD-MM-YYYY")} (Age{" "}
                  {calculateAge(state.birthday)})
                </span>
              </h6>
              <h6 className="leading-normal text-[#ffffff54] text-[13px]">
                Horoscope:{" "}
                <span className="text-white">
                  {getSigns(state.birthday).horoscope}
                </span>
              </h6>
              <h6 className="leading-normal text-[#ffffff54] text-[13px]">
                Zodiac:{" "}
                <span className="text-white">
                  {getSigns(state.birthday).zodiac}
                </span>
              </h6>
              <h6 className="leading-normal text-[#ffffff54] text-[13px]">
                Height: <span className="text-white">{state.height}cm</span>
              </h6>
              <h6 className="leading-normal text-[#ffffff54] text-[13px]">
                Weight: <span className="text-white">{state.weight}kg</span>
              </h6>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default About;
