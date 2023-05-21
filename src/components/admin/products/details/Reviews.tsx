import { TrashIcon } from '@heroicons/react/24/outline'
import { FC } from 'react'

type Props = {
  reviews: Review[]
}

const Reviews: FC<Props> = ({ reviews }) => {
  return (
    <section>
      <h2 className="mb-4 font-bold text-dark-600">Latest Reviews</h2>
      <div className="relative overflow-hidden overflow-x-auto rounded-t-lg">
        <table className="w-full text-sm text-left border text-dark-600 border-light ">
          <thead className="text-xs uppercase bg-light">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Author
              </th>
              <th scope="col" className="px-6 py-3">
                At
              </th>
              <th scope="col" className="px-6 py-3">
                comment
              </th>
              {/* <th scope="col" className="px-6 py-3">
                action
              </th> */}
            </tr>
          </thead>
          <tbody>
            {/* show latest 20 review */}
            {reviews.slice(-20).map(review => (
              <tr className="bg-white border-b last:border-none text-dark-600 border-light">
                <td className="px-6 py-3">{review.id}</td>
                <th className="p-3 whitespace-nowrap">{review.author.name}</th>
                <td className="p-3 whitespace-nowrap">{review.at}</td>
                <td className="p-3">{review.comment}</td>
                {/* <td className="p-3 text-center">
                  <button className="p-1.5 hover:bg-danger-100 hover:text-white transition-colors border rounded border-danger-100 text-danger-100">
                    <TrashIcon className="w-4 h-4" />
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Reviews
