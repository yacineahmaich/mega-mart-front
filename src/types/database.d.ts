interface Product {
  id: number
  name: string
  slug: string
  description: string
  price: number
  quantity: number
  avgRating: number
  category: Category
  images: Image[]
  totalReviews: number
  // reviews: Review[]
  discount: {
    value: number
    price: number
  } | null
}

interface Category {
  id: number
  name: string
  description: string
  totalProducts: number
  products?: Product[] // Specific to Category
  image: Image
}

interface MainCategory {
  id: number
  name: string
  description: string
  image: Image
  categories?: Category[]
}

interface User {
  id: number
  isAdmin?: boolean
  name: string
  email: string
  profileImg: string
}

interface Review {
  id: number
  rating: number
  comment: string
  at: string
  author: User
  product?: Product
}

interface Image {
  id: number
  name: string
  url: string
}

interface Offer {
  id: number
  start: string
  end: string
  backdrop: Image
}
