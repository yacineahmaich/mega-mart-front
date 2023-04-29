const ViewCustomer = () => {
  return (
    <section className="max-w-2xl p-6 mx-auto space-y-6 bg-white rounded-lg">
      <div className="flex gap-6">
        <div className="w-24 h-24 overflow-hidden rounded-lg shadow-lg ring-4 ring-slate-400">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
            alt="user profile"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-between flex-y-1">
          <span>
            <h2 className="text-lg font-bold text-dark-600">Rajae Omalk</h2>
            <small className="font-medium text-dark-500">rajae@gmail.com</small>
          </span>
          {/* <span className="font-medium text-dark-600">Orders: 6</span> */}
        </div>
        <div className="ml-auto">
          <button className="px-6 py-2 text-xs font-semibold text-white transition-colors rounded bg-danger-400 hover:bg-danger-600 active:ring active:ring-offset-1 active:ring-danger-100">
            delete account
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-bold text-dark-700">Last Orders:</h3>

        <ul>
          <li>order preview</li>
          <li>order preview</li>
          <li>order preview</li>
          <li>order preview</li>
        </ul>
      </div>
    </section>
  )
}

export default ViewCustomer
