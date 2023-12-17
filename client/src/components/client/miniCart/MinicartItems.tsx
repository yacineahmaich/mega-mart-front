import { FC } from 'react'
import MinicartItem from './MinicartItem'
import { useNavigate } from 'react-router-dom'

type Props = {
  products: Product[]
  onClose: () => void
}

const MinicartItems: FC<Props> = ({ products, onClose }) => {
  const navigate = useNavigate()
  const goToProduct = (slug: string) => {
    onClose()
    navigate(`/products/${slug}`)
  }

  return (
    <ul className="divide-y divide-slate-300">
      {products?.map(product => (
        <MinicartItem
          key={product.id}
          product={product}
          goToProduct={goToProduct}
        />
      ))}
    </ul>
  )
}

export default MinicartItems
