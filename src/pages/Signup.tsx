import { UserIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <UserIcon className="w-16 h-16 text-primary-700" />
        <h4 className="text-xl font-bold text-dark-800">
          Create your Account Now
        </h4>
      </div>

      <div>
        <form className="space-y-4">
          <input
            type="text"
            className="block w-full rounded-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent form-input"
            placeholder="Username"
          />
          <input
            type="text"
            className="block w-full rounded-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent form-input"
            placeholder="Email Address Or Password"
          />

          <input
            type="password"
            className="block w-full rounded-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent form-input"
            placeholder="Password"
          />
          <input
            type="password"
            className="block w-full rounded-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent form-input"
            placeholder="Confirm Password"
          />

          <button className="w-full py-2 text-white transition-colors rounded from-primary-600 to-primary-500 bg-gradient-to-tr hover:to-primary-600">
            Login
          </button>
        </form>
      </div>
      <div className="flex flex-wrap items-center justify-center">
        <p>You don't have account yet?</p>
        <Link to="/account/login" className="font-semibold text-primary-600">
          Signup
        </Link>
      </div>
    </div>
  )
}

export default Signup
