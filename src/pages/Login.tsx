import { UserIcon } from '@heroicons/react/24/outline'

const Login = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <UserIcon className="w-16 h-16 text-primary-700" />
        <h4 className="text-xl font-bold text-dark-800">
          Login To your Account
        </h4>
      </div>

      <div>
        <form className="space-y-4">
          <input
            type="text"
            className="block w-full rounded-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent form-input"
            placeholder="Email Address Or Password"
          />
          <input
            type="text"
            className="block w-full rounded-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent form-input"
            placeholder="Password"
          />

          <button className="w-full py-2 text-white transition-colors rounded from-primary-600 to-primary-500 bg-gradient-to-tr hover:to-primary-600">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
