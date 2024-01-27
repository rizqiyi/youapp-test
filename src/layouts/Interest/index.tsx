"use client";

import AppBar from "@/components/AppBar";
import Select from "@/components/Select";
import { useProfileContext } from "@/contexts/Profile";
import InterestsOptions from "@/enums/Interests";
import { ProfilePayload } from "@/services/profile";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const Index = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const { setLoading, loading } = useProfileContext();
  const { register, reset, setValue, watch, handleSubmit } =
    useForm<ProfilePayload>();

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

        if (response.data) {
          reset({
            ...response.data,
            interests: response.data.interests.map((interest: string) => ({
              label: interest,
              value: interest.toLowerCase(),
            })),
          });

          register("interests");
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (session?.user?.access_token) fetchProfile();
  }, [session?.user?.access_token]);

  const onSubmit = async (values: ProfilePayload) => {
    try {
      await fetch("/api/profile", {
        method: "PUT",
        headers: {
          authorization: session?.user?.access_token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          birthday: values.birthday,
          height: values.height,
          weight: values.weight,
          interests: values.interests.map((interest) => interest?.label),
        }),
      });

      router.push("/private/home");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <AppBar callbackSubmit={() => handleSubmit(onSubmit)()} />
      <div className="mt-[73px] px-[17px] text-white">
        <h6 className="text-[14px] only-golden-gradient-text leading-normal font-bold">
          Tell everyone about yourself
        </h6>
        <h6 className="text-[20px] mt-[12px] text-white leading-normal font-bold">
          What interest you?
        </h6>
      </div>
      <Select
        withArrow={false}
        variant="borderless"
        customStyle={{ height: "auto", padding: "10px 5px" }}
        className="mt-[35px] w-[95%]"
        options={InterestsOptions}
        value={watch("interests") as { label: string; value: string }[]}
        disabled={loading}
        isMulti
        onChange={(val) => setValue("interests", val)}
      />
    </div>
  );
};

export default Index;
