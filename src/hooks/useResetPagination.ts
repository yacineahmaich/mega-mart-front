import { useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'

const useResetPagination = () => {
  const [_, setSearchParams] = useSearchParams()

  return useCallback(() => {
    setSearchParams(sp => {
      sp.delete('page')
      console.log(sp.toString())
      return sp
    })
  }, [setSearchParams])
}

export default useResetPagination
