const isUndefined = (val: unknown): val is undefined => {
  return typeof val === 'undefined'
}

export default isUndefined
