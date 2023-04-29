import { Link } from 'react-router-dom'

const category = {
  id: 1,
  name: 'Category name',
  description: 'cat description...',
}

const ViewCategory = () => {
  return (
    <div>
      <h2 className="mb-8 text-lg font-bold text-center text-dark-500">
        {category.name}
      </h2>
      // more content here..
      <section>
        <div className="mt-3 space-x-4">
          <Link to="edit">
            <span className="text-info-400 hover:underline">edit</span>
          </Link>
          <button className="px-4 py-2 text-sm font-semibold text-white rounded-sm bg-danger-500">
            delete
          </button>
        </div>
      </section>
    </div>
  )
}

export default ViewCategory
