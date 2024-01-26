export interface LoginPayload {
  username: string;
  email: string;
  password: string;
}

export interface RegisterPayload {
  username: string;
  email: string;
  password: string;
  confirm_password?: string;
}

const signIn = async (values: LoginPayload) => {
  return fetch(`${process.env.NEXT_YOU_APP_API}/api/login`, {
    method: "post",
    body: JSON.stringify(values),
    headers: { "Content-Type": "application/json" },
  });
};

const signUp = async (values: RegisterPayload) => {
  return fetch(`${process.env.NEXT_YOU_APP_API}/api/register`, {
    method: "POST",
    body: JSON.stringify({
      email: values.email,
      username: values.username,
      password: values.password,
    }),
    headers: { "Content-Type": "application/json" },
  });
};

export { signIn, signUp };
