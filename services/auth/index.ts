import serverRequest from '../serverRequest'

const login = async () => {
  return await serverRequest({ url: '/api/hello' })
}

export { login }
