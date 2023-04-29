import { FC } from 'react'

const Footer: FC = () => {
  return (
    <footer
      className="w-full p-4 mt-0 space-y-6 md:space-y-12 md:p-8 bg-primary-900"
      id="footer"
    >
      <div className="grid divide-y divide-light md:gap-4 md:divide-y-0 md:grid-cols-2 xl:grid-flow-col">
        <div className="py-2 space-y-2 md:py-0 text-gray">
          <span className="font-bold">Links</span>
          <ul className="pl-3 text-sm">
            <li className="hover:underline">
              <a href="#">Home</a>
            </li>
            <li className="hover:underline">
              <a href="#">Favorites</a>
            </li>
            <li className="hover:underline">
              <a href="#">Cart</a>
            </li>
            <li className="hover:underline">
              <a href="#">Profile</a>
            </li>
          </ul>
        </div>
        <div className="py-2 space-y-2 md:py-0 text-gray">
          <span className="font-bold">Follow Us</span>
          <div className="pl-3">
            <p>follow us in our social media accounts</p>
            <a href="#">twitter</a>
            <a href="#">instagram</a>
          </div>
        </div>
        <div className="py-2 space-y-2 md:py-0 text-gray lg:col-span-1">
          <span className="font-bold">Email updated</span>
          <div className="pl-3 space-y-2">
            <p>Be the first to hear about our offers and announcements.</p>
            <form className="flex flex-wrap gap-2">
              <input
                type="email"
                className="rounded focus:ring-2 form-input focus:ring-primary-100"
                placeholder="example@gmail.com"
                required
              />
              <button className="px-3 py-3 text-sm transition-colors rounded text-gray bg-primary-700 hover:bg-primary-800 focus:ring-2 focus:ring-primary-100">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="py-2 space-y-2 md:py-0 text-gray lg:col-span-1">
          <span className="font-bold">Contact Us</span>
          <p>Questions? We've got answers. Try us.</p>
          <a
            href="#"
            className="block px-4 py-2 transition-colors border rounded w-fit border-info-900 text-info-900 hover:bg-info-900 hover:text-white"
          >
            Email Us
          </a>
        </div>
      </div>
      <div className="text-sm font-medium text-center text-slate-300">
        Copyright Ⓒ -{' '}
        <span className="text-md hover:underline text-info-900">Jersy-Hub</span>
        , All rights reserved.
      </div>
    </footer>
  )
}

export default Footer