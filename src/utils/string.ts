import { md5 } from 'hash-wasm'

type GravatarOptions = {
  email: string
  md5Hash?: string
  size: number
  defaultImage:
    | '404'
    | 'mp'
    | 'identicon'
    | 'monsterid'
    | 'wavatar'
    | 'retro'
    | 'robohash'
    | 'blank'
}

const getQueryStringWithOptions = (options: GravatarOptions) => {
  const { size, defaultImage } = options
  let queryString = '?'
  if (size) queryString += `s=${size}&`
  if (defaultImage) queryString += `d=${defaultImage}&`
  if (queryString.endsWith('&') || queryString.endsWith('?')) {
    return queryString.substr(0, queryString.length - 1)
  }
  return queryString
}

const generateGravatar = async (options: GravatarOptions) => {
  const emailHash =
    options.md5Hash || (await md5(options.email.trim().toLowerCase()))
  const queryString = getQueryStringWithOptions(options)
  return `https://www.gravatar.com/avatar/${emailHash}${queryString}`
}

export { generateGravatar }
