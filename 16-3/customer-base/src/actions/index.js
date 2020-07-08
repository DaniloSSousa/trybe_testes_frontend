export const CHECK_ACCESS = 'CHECK_ACCESS';

export const addAccess = (login, password) => ({
  type: CHECK_ACCESS,
  login,
  password,
});
