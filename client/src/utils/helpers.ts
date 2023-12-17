export const removeEmptyFields = <T>(obj: T): T => {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, v]) => v.trim() !== '')
  ) as T
}

export const formatNumber = (number: number) => {
  return Number(number.toFixed(2))
}

export const getAvatarUrlFromName = (name: string) => {
  return `https://ui-avatars.com/api/?background=13858f&color=fff&name=${name}`
}
