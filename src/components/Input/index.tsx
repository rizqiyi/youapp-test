"use client";

import Image from "next/image";
import { useState, type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: "sm" | "normal";
  variant?: "outline" | "normal";
  register?: any;
}

const Input: React.FC<InputProps> = (props: InputProps) => {
  const { inputSize = "normal", variant = "normal", register } = props;
  const [type, setType] = useState<string>("password");

  const sizes: Record<string, string> = {
    sm: "h-[36px] min-h-[36px] px-[10px] py-[20px]",
    normal: "min-h-[51px] px-[18px] py-[17px]",
  };

  const variants: Record<string, string> = {
    outline: "border-2 border-[#ffffff38]",
    normal: "",
  };

  const baseClass = `${sizes[inputSize]} ${variants[variant]} w-full bg-[#FFFFFF0F] focus:outline-none text-white text-[13px] rounded-[9px]`;

  return props.type === "password" ? (
    <div className={props.type === "password" ? "relative" : ""}>
      <input
        {...props}
        {...register}
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
  ) : (
    <input
      {...props}
      {...register}
      className={
        props.className ? `${baseClass} ${props.className}` : baseClass
      }
    />
  );
};

export default Input;
