import 'server-only'
import { headers } from 'next/headers'
import { preHost } from 'config'

const request = async ({ url, ...arg }: { url: string }) => {
  const headersInstance = headers()
  const host = headersInstance.get('host')
  const authorization = headersInstance.get('authorization')
  let resp = await fetch(preHost + host + url, {
    ...arg,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + authorization,
    },
  })
  return resp.json()
}

export default request
