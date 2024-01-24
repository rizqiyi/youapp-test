"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Index = () => {
  const router = useRouter();
  return (
    <div className="mt-[61px] px-[5px]">
      <span className="text-[24px] text-white font-bold ml-[18px]">Login</span>
      <div className="flex gap-[15px] flex-col">
        {/* From api this is required to fill (email AND username) not username OR email */}
        <Input className="mt-[25px]" placeholder="Enter Username" />
        <Input placeholder="Enter Email" />
        <Input placeholder="Enter Password" autoComplete="new-password" type="password" />
      </div>
      <div className="mt-[25px] mb-[50px]">
        <Button onClick={() => router.push("/")}>Login</Button>
      </div>
      <h5 className="text-center text-[13px] font-medium text-white">
        No account?{" "}
        <Link href="/register">
          <span className="golden-gradient-text">Register here</span>
        </Link>
      </h5>
    </div>
  );
};

export default Index;
