import Header from '../../components/client/Header'
import Error from '../../components/client/ui/Error'

function ErrorPage() {
  return (
    <>
      <Header />
      <div className="mt-10 md:mt-20">
        <Error />
      </div>
    </>
  )
}

export default ErrorPage
