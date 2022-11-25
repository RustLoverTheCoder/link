import 'client-only'

const clientRequest = async ({ url, ...arg }: { url: string }) => {
  const authorization = ''
  let resp = await fetch(url, {
    ...arg,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + authorization,
    },
  })
  return resp.json()
}

export default clientRequest
