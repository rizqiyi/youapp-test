export interface ProfilePayload {
  name: string;
  birthday: string;
  height: number;
  weight: number;
  interests: { label: string; value: string }[] | string[];
  gender?: string;
}

const createProfile = async (token: string, values: ProfilePayload) => {
  return fetch(`${process.env.NEXT_YOU_APP_API}/api/createProfile`, {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  });
};

const updateProfile = async (token: string, values: ProfilePayload) => {
  return fetch(`${process.env.NEXT_YOU_APP_API}/api/updateProfile`, {
    method: "PUT",
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
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
