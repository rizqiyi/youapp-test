"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

// TODO: Add logic for private and public route for back button
interface AppBarProps {
  callbackSubmit?: () => void;
}

const Index: React.FC<AppBarProps> = ({ callbackSubmit = () => {} }) => {
  const { back, push } = useRouter();
  const pathname = usePathname();

  return (
    <div className="mt-5 grid grid-cols-3 justify-items-stretch">
      <div className="justify-self-start">
        <button
          onClick={() => {
            if (pathname === "/") return push("/login");

            back();
          }}
          className="flex items-center gap-[10px]"
        >
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
        {pathname !== "/interest" && (
          <span className="text-[14px] font-semibold text-white">@johndoe</span>
        )}
      </div>
      <div className="justify-self-end self-center">
        {pathname === "/interest" ? (
          <button
            onClick={callbackSubmit}
            className="text-[14px] font-semibold outline-none save-blue-text-gradient"
          >
            Save
          </button>
        ) : (
          <Image
            src="/icons/menu-ic.svg"
            height={7}
            width={21}
            quality={100}
            alt="left-arrow"
          />
        )}
      </div>
    </div>
  );
};

export default Index;
