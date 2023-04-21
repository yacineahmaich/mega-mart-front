import { FC } from 'react'

const Subscribe: FC = () => {
  return <div></div>

  return (
    <section
      className="relative w-full h-64 mt-10 mb-10 bg-center bg-cover after:absolute after:inset-0 after:w-full after:h-full after:bg-dark-900/60"
      style={{
        backgroundImage:
          'url("https://d3qfk7u7s63iel.cloudfront.net/media/zoo/images/football_players_6d7de22a5aea727b9f1983961e40d3ed.jpg")',
      }}
    >
      <div className="relative z-10 flex items-center justify-between h-full px-20">
        <h3 className="max-w-lg text-3xl font-medium text-white ">
          Subscribe to get the latest Jersyes and promotions
        </h3>

        <form className="flex gap-1">
          <input
            type="email"
            className="w-64 rounded focus:ring-2 focus:ring-primary-900"
            placeholder="example@gmail.com"
            required
          />
          <button className="px-3 text-sm rounded text-gray bg-primary-900 ">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

export default Subscribe
