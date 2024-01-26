"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { RegisterPayload, signUp } from "@/services/auth";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

const Index = () => {
  const router = useRouter();
  const { register, handleSubmit, watch } = useForm<RegisterPayload>();

  const onValid = async (values: RegisterPayload) => {
    try {
      await signUp(values);

      const response = await signIn("credentials", {
        email: values.email,
        username: values.username,
        password: values.password,
        redirect: false,
        callbackUrl: "/private/home",
      });

      if (response?.ok) router.replace("/private/home");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="mt-[61px] px-[5px]">
      <span className="text-[24px] text-white font-bold ml-[18px]">
        Register
      </span>
      <form onSubmit={handleSubmit(onValid, (err) => console.error(err))}>
        <div className="flex gap-[15px] flex-col">
          <Input
            className="mt-[25px]"
            register={register("email", { required: true })}
            type="text"
            placeholder="Enter Email"
          />
          <Input
            placeholder="Create Username"
            type="text"
            register={register("username", { required: true })}
          />
          <Input
            register={register("password", { required: true })}
            placeholder="Create Password"
            autoComplete="new-password"
            type="password"
          />
          <Input
            register={register("confirm_password", {
              required: true,
              validate: (value) => {
                if (watch("password") !== value) {
                  return "Your passwords do no match";
                }
              },
            })}
            placeholder="Confirm Password"
            type="password"
          />
        </div>
        <div className="mt-[25px] mb-[50px]">
          <Button type="submit">Register</Button>
        </div>
      </form>
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
