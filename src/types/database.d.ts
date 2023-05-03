interface Product {
  id: string
  name: string
  price: number
  category: string
  quantity: number
  discount: {
    has: boolean
    value: number
    price: number
  }
  images: { id: string; url: string }[]
}

interface User {
  id: string
  name: string
  email: string
}
