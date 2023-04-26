import { ChevronDownIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full pl-admin-sidebar h-admin-navbar">
      <div className="flex items-center w-full h-full px-6 bg-white">
        <header className="flex items-center justify-between w-full py-3">
          <span>&nbsp;</span>

          <nav>
            <span className="inline-flex text-primary-600 font-bold items-center px-4 py-1.5 text-xs uppercase border border-primary-600">
              Welcome Back,&nbsp;<span>yacine</span>
            </span>
          </nav>
        </header>
      </div>
    </div>
  )
}

export default Navbar
