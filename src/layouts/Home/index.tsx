"use client";

import React, { useEffect } from "react";
import About from "./partials/About";
import Interest from "./partials/Interest";
import ProfileBanner from "./partials/ProfileBanner";
import { useSession } from "next-auth/react";

const Index = () => {
  const { data: session } = useSession();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("/api/profile", {
          method: "get",
          headers: { authorization: session?.user?.access_token },
        });

        const data = await res.json();

        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };

    if (session?.user?.access_token) fetchProfile();
  }, [session?.user?.access_token]);

  return (
    <div className="flex gap-6 flex-col">
      <ProfileBanner />
      <About />
      <Interest />
    </div>
  );
};

export default Index;
