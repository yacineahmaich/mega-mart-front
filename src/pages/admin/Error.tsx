const Error = () => {
  const reload = () => {
    location.reload()
  }

  return (
    <article>
      <div className="space-y-2 text-center">
        <p className="font-medium">
          <span className="font-bold text-danger-800">Oops!</span> Something
          went wrong 🤕
        </p>

        <p className="text-dark-600">
          please check you connection and retry again
        </p>
        <button
          className="px-6 py-1 text-white rounded-full bg-primary-600"
          onClick={reload}
        >
          reload
        </button>
      </div>
    </article>
  )
}

export default Error
