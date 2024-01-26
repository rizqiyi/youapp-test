import { getSession } from "next-auth/react";

export interface ProfilePayload {
  name: string;
  birthday: string;
  height: number;
  weight: number;
  interests: string[];
}

const createProfile = async (values: ProfilePayload) => {
  return fetch(`${process.env.NEXT_YOU_APP_API}/api/createProfile`, {
    method: "POST",
    body: JSON.stringify(values),
  });
};

const updateProfile = async (values: ProfilePayload) => {
  return fetch(`${process.env.NEXT_YOU_APP_API}/api/updateProfile`, {
    method: "PUT",
    body: JSON.stringify(values),
  });
};

const getProfile = async (token: string) => {
  return fetch(`${process.env.NEXT_YOU_APP_API}/api/getProfile`, {
    method: "GET",
    headers: {
      "x-access-token": token,
    },
  });
};

export { createProfile, updateProfile, getProfile };
