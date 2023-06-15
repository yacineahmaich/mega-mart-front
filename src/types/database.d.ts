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
  discount: Discount | null
}

interface Category {
  id: number
  name: string
  slug: string
  description: string
  totalProducts: number
  products?: Product[] // Specific to Category
  image: Image
  parentCategory: MainCategory
}

interface MainCategory {
  id: number
  name: string
  slug: string
  description: string
  totalCategories: number
  image: Image
  categories?: Category[]
}

interface User {
  id: number
  isAdmin?: boolean
  name: string
  email: string
  avatar: Image
  createdAt: string
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
  product: Product
}

interface Discount {
  id: number
  start: string
  end: string
  percentage: number
  price: number
  product?: Product
}
