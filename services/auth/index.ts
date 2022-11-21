import request from "../request";

const login = async () => {
  return await request({ url: "/api/hello" });
};

export { login };
