"use client";

import React, { useEffect } from "react";
import About from "./partials/About";
import Interest from "./partials/Interest";
import ProfileBanner from "./partials/ProfileBanner";
import { useSession } from "next-auth/react";
import { useProfileContext } from "@/contexts/Profile";
import Skeleton from "@/components/Skeleton";

const Index = () => {
  const { data: session } = useSession();
  const { setState, setLoading, refetch, loading } = useProfileContext();

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/profile", {
          method: "get",
          headers: { authorization: session?.user?.access_token },
          cache: "no-cache",
        });

        const { data: response } = await res.json();

        if (response.data)
          setState({
            ...response.data,
            isEmptyProfile: typeof response.data.name === "undefined",
          });
      } catch (err) {
        console.error(err);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    };

    if (session?.user?.access_token) fetchProfile();
  }, [session?.user?.access_token, refetch]);

  return (
    <div className="flex gap-6 flex-col">
      {loading ? (
        <>
          <Skeleton className="bg-[#162329] h-[190px]" />
          <Skeleton className="h-[130px]" />
          <Skeleton className="h-[130px]" />
        </>
      ) : (
        <>
          <ProfileBanner />
          <About />
          <Interest />
        </>
      )}
    </div>
  );
};

export default Index;
