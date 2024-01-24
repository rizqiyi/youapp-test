"use client";

import Image from "next/image";
import {
  useState,
  type DetailedHTMLProps,
  type InputHTMLAttributes,
} from "react";

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const Input: React.FC<InputProps> = (props: InputProps) => {
  const [type, setType] = useState<string>("password");
  const baseClass =
    "min-h-[51px] w-full bg-[#FFFFFF0F] focus:outline-none px-[18px] py-[17px] text-white text-[13px] rounded-[9px]";

  return (
    <div className="relative">
      <input
        {...props}
        type={props.type === "password" ? type : props.type}
        className={
          props.className ? `${baseClass} ${props.className}` : baseClass
        }
      />
      {props.type === "password" && (
        <button
          onClick={() => setType(type === "password" ? "text" : "password")}
          className="absolute top-[17px] right-[18px]"
        >
          {/* i don't have eye icon for text type */}
          <Image
            src="/icons/eye-ic.svg"
            height={17}
            width={20}
            quality={100}
            alt="eye"
          />
        </button>
      )}
    </div>
  );
};

export default Input;
