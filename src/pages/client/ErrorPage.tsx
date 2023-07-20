import { Link, useRouteError } from 'react-router-dom'
import Header from '../../components/client/Header'
import { BoltIcon, HomeIcon } from '@heroicons/react/24/outline'

function ErrorPage() {
  const error: any = useRouteError()

  const reload = () => window.location.reload()

  return (
    <>
      <Header />
      <section>
        <div className="py-24 space-y-10 text-center border-t bg-primary-800 border-gray">
          <h1 className="text-6xl font-black text-white">
            Unexpected Error Occur !
          </h1>
          <p className="text-xl text-danger-900">
            {error?.message ??
              "We're sorry, but an error has occurred while processing your request. Please try again later."}
          </p>

          <div className="flex items-center justify-center gap-3">
            <Link
              to="/"
              className="p-3 text-sm font-semibold text-white divide-x rounded shadow bg-primary-500"
            >
              <HomeIcon className="inline w-6 h-6 mr-2" />
              <span className="pl-2">Back Home</span>
            </Link>
            <button
              className="p-3 text-sm font-semibold text-white divide-x rounded shadow bg-white/10 hover:bg-primary-500"
              onClick={reload}
            >
              <BoltIcon className="inline w-6 h-6 mr-2" />
              <span className="px-2">Reload</span>
            </button>
          </div>
        </div>
      </section>
      <section className="p-10 text-center">
        <h3 className="text-2xl font-bold text-dark-600">
          We're Sorry, this is error is Unexpected!
        </h3>

        <p className="mt-4 text-dark-500">
          Thank you for your patience and understanding.
        </p>
      </section>
    </>
  )
}

export default ErrorPage
