import "server-only";

const request = async ({ url, ...arg }: { url: string }) => {
  let resp = await fetch(url, {
    ...arg,
  });
  return resp.json();
};

export default request;
