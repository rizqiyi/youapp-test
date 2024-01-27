"use client";

import { useErrorContext } from "@/contexts/Error";
import { useProfileContext } from "@/contexts/Profile";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

interface AppBarProps {
  callbackSubmit?: () => void;
}

const Index: React.FC<AppBarProps> = ({ callbackSubmit = () => {} }) => {
  const { setLoading } = useProfileContext();
  const {
    state: { error },
  } = useErrorContext();

  const { back } = useRouter();
  const { data, status } = useSession();
  const pathname = usePathname();
  const isAuthenticated = status === "authenticated";
  const publicRoute = ["/login", "/register"];

  useEffect(() => {
    if (data?.error === "unauthenticated" && !publicRoute.includes(pathname))
      signOut({ redirect: true, callbackUrl: "/login" });
  }, [data?.error]);

  return (
    <>
      {typeof error === "string" && error && (
        <div className="min-h-fit bg-red-700 font-medium text-white p-2 text-[12px] rounded-md">
          {error}
        </div>
      )}
      <div className="mt-5 grid grid-cols-3 justify-items-stretch">
        <div className="justify-self-start">
          <button
            onClick={async () => {
              if (pathname === "/private/home" && isAuthenticated) {
                setLoading(true);
                await signOut({ redirect: true, callbackUrl: "/login" });

                setTimeout(() => {
                  setLoading(false);
                }, 500);

                return;
              }

              back();
            }}
            className="flex items-center gap-[10px]"
          >
            <Image
              src="/icons/left-arrow-ic.svg"
              height={14}
              width={9}
              quality={100}
              alt="left-arrow"
            />
            <span className="text-[14px] font-bold text-white">Back</span>
          </button>
        </div>
        <div className="justify-self-center">
          {!publicRoute.includes(pathname) &&
            pathname !== "/private/interest" &&
            isAuthenticated && (
              <span className="text-[14px] font-semibold text-white">
                @{data?.user?.username}
              </span>
            )}
        </div>
        <div className="justify-self-end self-center">
          {!publicRoute.includes(pathname) &&
            pathname === "/private/interest" &&
            isAuthenticated && (
              <button
                onClick={callbackSubmit}
                className="text-[14px] font-semibold outline-none save-blue-text-gradient"
              >
                Save
              </button>
            )}
          {!publicRoute.includes(pathname) &&
            pathname !== "/private/interest" &&
            isAuthenticated && (
              <Image
                src="/icons/menu-ic.svg"
                height={7}
                width={21}
                quality={100}
                alt="left-arrow"
              />
            )}
        </div>
      </div>
    </>
  );
};

export default Index;
