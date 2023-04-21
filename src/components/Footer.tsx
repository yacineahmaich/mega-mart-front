import { FC } from 'react'

const Footer: FC = () => {
  return (
    <footer className="w-full p-8 mt-0 space-y-12 bg-primary-900">
      <div className="flex justify-between">
        <div className="space-y-2 text-gray">
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
        <div className="space-y-2 text-gray">
          <span className="font-bold">Follow Us</span>
          <div className="pl-3">
            <p>follow us in our social media accounts</p>
            <a href="#">twitter</a>
            <a href="#">instagram</a>
          </div>
        </div>
        <div className="space-y-2 text-gray">
          <span className="font-bold">Email updated</span>
          <div className="pl-3 space-y-2">
            <p>Be the first to hear about our offers and announcements.</p>
            <form className="flex gap-2">
              <input
                type="email"
                className="w-64 rounded focus:ring-2 focus:ring-primary-100"
                placeholder="example@gmail.com"
                required
              />
              <button className="px-3 text-sm transition-colors rounded text-gray bg-primary-700 hover:bg-primary-800 focus:ring-2 focus:ring-primary-100">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="space-y-2 text-gray">
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
