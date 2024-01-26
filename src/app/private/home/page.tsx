"use client";

import Home from "@/layouts/Home";
import { WrapperPrivate } from "@/components/Wrapper";
import { useSession } from "next-auth/react";

export const Page = () => {
  const { data: session } = useSession();

  console.log('asd', session)
  return (
    <WrapperPrivate>
      <Home />
    </WrapperPrivate>
  );
};

export default Page;
