import { useRouteError } from 'react-router-dom'
import Header from '../../components/client/Header'
import Error from '../../components/client/ui/Error'

function ErrorPage() {
  const err = useRouteError()
  return (
    <>
      <Header />
      <div className="mt-10 md:mt-20">
        <Error message={err['message'] || err['status']} />
      </div>
    </>
  )
}

export default ErrorPage
