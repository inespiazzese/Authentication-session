import axios from "axios";

const login = async (user) => {
  const result = await axios.post("/auth/login", user);
  return result;
};

const signup = async (user) => {
  const result = await axios.post("/auth/signup", user);
  return result;
};

const verify = async () => {
  const res = await axios.get("/auth/verify");
  return res;
};

const logout = async () => {
  const res = await axios.get("/auth/logout");
  return res;
};

export { login, signup, verify, logout };
