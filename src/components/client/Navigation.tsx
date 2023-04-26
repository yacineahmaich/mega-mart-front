import { FC } from 'react'

const Navigation: FC = () => {
  return (
    <nav className="w-full px-6 py-2 mb-4 border-b border-gray" id="navigation">
      <ul className="flex space-x-4 text-sm font-medium ">
        <li>
          <a
            href="#"
            className="transition-colors text-dark-500 hover:text-dark-700"
          >
            New Jersy
          </a>
        </li>
        <li className="w-[1px] min-h-full  max-h-full bg-gray"></li>
        <li>
          <a
            href="#"
            className="transition-colors text-dark-500 hover:text-dark-700"
          >
            Exclusive plans
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
