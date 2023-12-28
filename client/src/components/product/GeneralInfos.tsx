import { useState } from 'react'
import Description from './Description'
import Reviews from './Reviews'

const GeneralInfos = () => {
  const [activeTab, setActiveTab] = useState('description')

  return (
    <div className="mb-40">
      <div className="w-full border-b border-gray">
        <div className="flex gap-4 text-sm font-semibold text-dark-600">
          <button
            className={`py-2 border-b-4   ${
              activeTab === 'description'
                ? 'border-primary-400'
                : 'border-transparent'
            }`}
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
          <button
            className={`py-2 border-b-4  ${
              activeTab === 'reviews'
                ? ' border-primary-400'
                : 'border-transparent'
            }`}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews
          </button>
        </div>
      </div>
      <div className="p-6">
        {activeTab === 'description' ? <Description /> : <Reviews />}
      </div>
    </div>
  )
}

export default GeneralInfos
