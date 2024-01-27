const checkAuth = (jwtToken: string): boolean => {
  if (!jwtToken) return false;

  try {
    const { exp } = decode<JwtPayload>(jwtToken);

    if ((exp as number) < new Date().getTime() / 1000) {
      return false;
    }
  } catch (err) {
    return false;
  }

  return true;
};
