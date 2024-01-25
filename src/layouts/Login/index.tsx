"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

interface LoginForm {
  username: string;
  email: string;
  password: string;
}

const Index = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<LoginForm>();

  const onValid = async (values: LoginForm) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/login`,
        {
          method: "post",
          body: JSON.stringify(values),
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = await response.json();

      localStorage.setItem("accessToken", data?.access_token);
      router.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="mt-[61px] px-[5px]">
      <span className="text-[24px] text-white font-bold ml-[18px]">Login</span>
      <form onSubmit={handleSubmit(onValid)}>
        <div className="flex gap-[15px] flex-col">
          {/* From api this is required to fill (email AND username) not username OR email */}
          <Input
            className="mt-[25px]"
            placeholder="Enter Username"
            register={register("username")}
          />
          <Input placeholder="Enter Email" register={register("email")} />
          <Input
            placeholder="Enter Password"
            autoComplete="new-password"
            type="password"
            register={register("password")}
          />
        </div>
        <div className="mt-[25px] mb-[50px]">
          <Button type="submit">Login</Button>
        </div>
      </form>
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
