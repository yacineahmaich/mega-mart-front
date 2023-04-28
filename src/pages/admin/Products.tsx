import ProductsTable from '../../components/admin/products/ProductsTable'
import Statistics from '../../components/admin/products/Statistics'

const Products = () => {
  return (
    <div>
      <main className="">
        <Statistics />

        <h2 className="mb-3 text-lg font-bold text-dark-500">
          Manage Products
        </h2>

        <ProductsTable />
      </main>
    </div>
  )
}

export default Products
