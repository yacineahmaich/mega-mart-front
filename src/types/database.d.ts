interface Product {
  id: string
  name: string
  slug?: string
  price: number
  category: string
  quantity: number
  discount: {
    has: boolean
    value: number
    price: number
  }
  images: { id: string; url: string }[]
  category?: Category
}

interface Category {
  id: string
  name: string
  description: string
  products?: Product[]
}

interface User {
  id: string
  name: string
  email: string
}