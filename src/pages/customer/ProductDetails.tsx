import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/solid'
import Checkout from '../../components/customer/product/Checkout'
import GeneralInfos from '../../components/customer/product/GeneralInfos'
import Infos from '../../components/customer/product/Infos'
import Preview from '../../components/customer/product/Preview'

const ProductDetails = () => {
  return (
    <div className="px-3 space-y-12 sm:px-6">
      <section>
        <div className="relative grid md:grid-cols-[40%_60%] gap-6">
          <h2 className="text-xl font-bold leading-8 md:hidden text-dark-600">
            Retro 07-08 Manchester United Gray Goalkeeper
          </h2>
          <Preview />
          <Infos />
          <Checkout />
        </div>
      </section>
      <section>
        <GeneralInfos />
      </section>

      <div className="fixed bottom-0 left-0 z-20 flex items-center w-full gap-2 px-3 bg-white md:hidden">
        <div className="flex justify-center py-3 lg:py-6">
          <button className="px-4 border rounded-l-md border-gray text-primary-400">
            <PlusSmallIcon className="w-4 h-4" />
          </button>
          <input
            defaultValue={1}
            type="number"
            className="w-14 py-1 border-[1px] outline-0 border-y border-x-0 focus:border-light font-medium text-dark-600 text-center  border-gray"
          />
          <button className="px-4 border rounded-r-md border-gray text-danger-400">
            <MinusSmallIcon className="w-4 h-4 " />
          </button>
        </div>

        <button className="flex-1 py-2.5 text-sm font-medium text-white border rounded-full bg-primary-700 hover:bg-primary-600 active:ring active:ring-primary-600">
          Add To Cart
        </button>
      </div>
    </div>
  )
}

export default ProductDetails
