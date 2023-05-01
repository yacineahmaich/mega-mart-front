import { useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'

const useParams = () => {
  const [_, setSearchParams] = useSearchParams()

  return useCallback(
    (key: string, value: string): void => {
      setSearchParams(searchParams => {
        // if (searchParams.has(key)) searchParams.delete(key)
        if (value.trim() === '') searchParams.delete(key)
        else searchParams.set(key, value)

        return searchParams
      })
    },
    [setSearchParams]
  )
}

export default useParams
