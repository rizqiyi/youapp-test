"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import type { LoginPayload } from "@/services/auth";
import { useErrorContext } from "@/contexts/Error";

const Index = () => {
  const router = useRouter();
  const { setState } = useErrorContext();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginPayload>();

  const onValid = async (values: LoginPayload) => {
    try {
      const response = await signIn("credentials", {
        ...values,
        redirect: false,
        callbackUrl: "/login",
      });

      if (response?.ok) return router.push("/private/home");

      throw response?.error;
    } catch (err) {
      setState({ error: String(err) });
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
            register={register("username", { required: true })}
            disabled={isSubmitting}
          />
          <Input
            placeholder="Enter Email"
            disabled={isSubmitting}
            register={register("email", { required: true })}
          />
          <Input
            placeholder="Enter Password"
            autoComplete="new-password"
            type="password"
            register={register("password", { required: true })}
            disabled={isSubmitting}
          />
        </div>
        <div className="mt-[25px] mb-[50px]">
          <Button disabled={isSubmitting} type="submit">
            Login
          </Button>
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
