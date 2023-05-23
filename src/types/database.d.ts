interface Product {
  id: string
  name: string
  slug: string
  description: string
  price: number
  quantity: number
  avgRating: number
  category: Category
  images: Image[]
  totalReviews: string
  // reviews: Review[]
  discount: {
    has: boolean
    value: number
    price: number
  }
}

interface Category {
  id: string
  name: string
  description: string
  totalProducts: string
  products?: Product[]
}

interface User {
  id: string
  isAdmin: boolean
  name: string
  email: string
  profileImg: string
}

interface Review {
  id: string
  rating: number
  comment: string
  at: string
  author: User
  product?: Product
}

interface Image {
  id: string
  url: string
}
