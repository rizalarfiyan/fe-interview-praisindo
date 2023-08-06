const formatCurrency = (num: number, isSort = false, prefix = 'IDR') => {
  const prefixStr = prefix === '' ? '' : prefix + ' '
  if (!isSort) {
    return (
      prefixStr +
      num.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    )
  }

  const suffixes = ['', 'K', 'M', 'B', 'T']
  const suffixNum = Math.floor(num.toString().length / 3)
  const shortValue = parseFloat(
    (suffixNum != 0 ? num / Math.pow(1000, suffixNum) : num).toPrecision(2),
  )
  return `${prefixStr}${
    shortValue % 1 != 0 ? shortValue.toFixed(1) : shortValue.toString()
  } ${suffixes[suffixNum]}`
}

export { formatCurrency }
