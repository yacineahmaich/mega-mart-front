import { products } from '../../../utils/contants'
import { Link } from 'react-router-dom'

const ProductsTable = () => {
  return (
    <section>
      <div className="relative overflow-hidden overflow-x-auto rounded-t-lg">
        <table className="w-full text-sm text-left border text-dark-600 border-light ">
          <thead className="text-xs text-white uppercase bg-primary-600">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                quantity
              </th>
              <th scope="col" className="px-6 py-3">
                price
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                actions
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr className="bg-white border-b last:border-none text-dark-600 border-light">
                <td className="px-6 py-3">{product.id}</td>
                <th
                  scope="row"
                  className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap"
                >
                  {product.name.slice(0, 20)}
                </th>
                <td className="px-6 py-3">{product.quantity}</td>
                <td className="px-6 py-3">{product.price}</td>

                <td className="space-x-3 text-center">
                  <Link
                    to={`${product.id}/edit`}
                    className="text-sm font-medium hover:underline text-info-300"
                  >
                    edit
                  </Link>
                  <Link
                    to="products"
                    className="text-sm font-medium hover:underline text-warning-900"
                  >
                    view
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* table pagination */}
      <nav
        className="flex items-center justify-between pt-4"
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal text-dark-600 ">
          Showing&nbsp;
          <span className="font-semibold text-gray-900">1-10&nbsp;</span>
          of&nbsp;
          <span className="font-semibold text-gray-900">1000&nbsp;</span>
        </span>
        <ul className="inline-flex items-center -space-x-px">
          <li>
            <a
              href="#"
              className="block px-3 py-2 ml-0 leading-tight bg-white border rounded-l-lg text-dark-600 border-gray hover:bg-primary-600 hover:text-white -700 "
            >
              <span className="sr-only">Previous</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-3 py-2 leading-tight bg-white border text-dark-600 border-gray hover:bg-primary-600 hover:text-white"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-3 py-2 leading-tight bg-white border text-dark-600 border-gray hover:bg-primary-600 hover:text-white"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              className="px-3 py-2 leading-tight bg-white border text-dark-600 border-gray hover:bg-primary-600 hover:text-white"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-3 py-2 leading-tight bg-white border text-dark-600 border-gray hover:bg-primary-600 hover:text-white"
            >
              ...
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-3 py-2 leading-tight bg-white border text-dark-600 border-gray hover:bg-primary-600 hover:text-white "
            >
              100
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-3 py-2 leading-tight bg-white border rounded-r-lg text-dark-600 border-gray hover:bg-primary-600 hover:text-white "
            >
              <span className="sr-only">Next</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default ProductsTable
