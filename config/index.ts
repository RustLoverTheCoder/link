import { isDevelopment } from 'utils'

export const preHost = isDevelopment() ? 'http://' : 'https://'
