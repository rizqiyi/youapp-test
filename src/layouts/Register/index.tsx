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
      <span className="text-[24px] text-white font-bold ml-[18px]">Register</span>
      <div className="flex gap-[15px] flex-col">
        <Input className="mt-[25px]" type="text" placeholder="Enter Email" />
        <Input placeholder="Create Username" type="text" />
        <Input placeholder="Create Password" autoComplete="new-password" type="password" />
        <Input placeholder="Confirm Password" type="password" />
      </div>
      <div className="mt-[25px] mb-[50px]">
        <Button onClick={() => router.push("/")}>Register</Button>
      </div>
      <h5 className="text-center text-[13px] font-medium text-white">
        Have an account?{" "}
        <Link href="/login">
          <span className="golden-gradient-text">Login here</span>
        </Link>
      </h5>
    </div>
  );
};

export default Index;
