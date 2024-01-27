"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { useErrorContext } from "@/contexts/Error";
import { RegisterPayload } from "@/services/auth";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

const Index = () => {
  const router = useRouter();
  const { setState } = useErrorContext();
  const { register, handleSubmit, watch } = useForm<RegisterPayload>();

  const onValid = async (values: RegisterPayload) => {
    try {
      const register = await fetch(`/api/auth/register`, {
        method: "POST",
        body: JSON.stringify({
          email: values.email,
          username: values.username,
          password: values.password,
        }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await register.json();

      if (register.ok) {
        const response = await signIn("credentials", {
          email: values.email,
          username: values.username,
          password: values.password,
          redirect: false,
          callbackUrl: "/register",
        });

        if (response?.ok) return router.replace("/private/home");
      }

      throw data;
    } catch (err: any) {
      setState({
        error: Array.isArray(err?.message) ? err?.message?.[0] : err?.message,
      });
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
