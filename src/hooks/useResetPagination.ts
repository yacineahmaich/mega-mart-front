import { useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'

const useResetPagination = () => {
  const [_, setSearchParams] = useSearchParams()

  return useCallback(() => {
    setSearchParams(sp => {
      sp.delete('page')

      return sp
    })
  }, [setSearchParams])
}

export default useResetPagination
