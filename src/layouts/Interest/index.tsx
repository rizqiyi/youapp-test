"use client";

import AppBar from "@/components/AppBar";
import Input from "@/components/Input";
import { useRouter } from "next/navigation";
import React from "react";

const Index = () => {
  const router = useRouter();

  return (
    <div>
      <AppBar callbackSubmit={() => router.push("/")} />
      <div className="mt-[73px] px-[17px] text-white">
        <h6 className="text-[14px] only-golden-gradient-text leading-normal font-bold">
          Tell everyone about yourself
        </h6>
        <h6 className="text-[20px] mt-[12px] text-white leading-normal font-bold">
          What interest you?
        </h6>
      </div>
      <Input className="mt-[35px] w-[95%]" />
    </div>
  );
};

export default Index;
