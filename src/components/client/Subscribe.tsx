import { FC } from 'react'

const Subscribe: FC = () => {
  return (
    <section
      className="relative w-full h-64 mt-10 bg-center bg-cover border-b border-b-light after:absolute after:inset-0 after:w-full after:h-full after:bg-black/40"
      style={{
        backgroundImage:
          'url("https://png.pngtree.com/thumb_back/fh260/background/20230217/pngtree-abstract-background-for-extreme-sports-team-jersey-image_1610640.jpg")',
      }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-5 px-20 md:justify-between md:flex-row">
        <h3 className="max-w-md text-xl font-medium text-white md:text-2xl lg:text-3xl ">
          Subscribe to get the latest News and promotions
        </h3>

        <form className="flex gap-2">
          <input
            type="email"
            className="w-64 rounded focus:border-transparent form-input focus:ring-2 focus:ring-orange-600"
            placeholder="Example@gmail.com"
            required
          />
          <button className="px-3 text-sm bg-orange-600 rounded text-gray ">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

export default Subscribe
