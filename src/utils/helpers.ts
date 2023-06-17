export const removeEmptyFields = <T>(obj: T): T => {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, v]) => v.trim() !== '')
  ) as T
}

export const formatNumber = (number: number) => {
  return Number(number.toFixed(2))
}
