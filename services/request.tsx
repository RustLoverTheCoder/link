import "server-only";
import { headers } from 'next/headers';

const request = async ({ url, ...arg }: { url: string }) => {
  const headersInstance = headers()
  const authorization = headersInstance.get('authorization')
  console.log('authorization',authorization)
  let resp = await fetch(url, {
    ...arg,
  });
  return resp.json();
};

export default request;
