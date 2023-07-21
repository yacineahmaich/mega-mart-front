import { useParams } from 'react-router-dom'
import { useMainCategoryFeed } from '../../../features/client/main-category/feed'

const Cover = () => {
  const { slug } = useParams()
  const {
    data: { mainCategory },
  } = useMainCategoryFeed(slug)

  return (
    <section className="relative h-96 md:h-[400px]">
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
      <img
        src={mainCategory.image.url}
        alt={mainCategory.image.name}
        className="z-0 object-cover w-full h-full"
      />
    </section>
  )
}

export default Cover
