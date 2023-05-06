import { UserIcon } from '@heroicons/react/24/solid'
const Profile = () => {
  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold">
        <UserIcon className="inline w-6 h-6 mr-2" />
        <span className="align-middle">Profile</span>
      </h3>

      <div className="flex border divide-x divide-gray border-gray">
        <div className="w-1/2 divide-y divide-gray">
          <div className="p-6">
            <h5 className="text-lg font-semibold text-dark-500">Name</h5>
            <span className="text-sm font-bold text-dark-700">
              Yacine Ahmaich
            </span>
          </div>
          <div className="p-6">
            <h5 className="text-lg font-semibold text-dark-500">Email</h5>
            <span className="text-sm font-bold text-dark-700">
              yacine@gmail.com
            </span>
          </div>
          <div className="p-6">
            <h5 className="text-lg font-semibold text-dark-500">Identifier:</h5>
            <span className="text-sm font-bold text-dark-700">343</span>
          </div>
        </div>

        <div className="w-1/2 divide-y divide-gray">
          <div className="p-6">
            <h5 className="text-lg font-semibold text-dark-500">
              Total Orders
            </h5>
            <span className="text-sm font-bold text-dark-700">12</span>
          </div>
          <div className="p-6">
            <h5 className="text-lg font-semibold text-dark-500">
              Total spented amount
            </h5>
            <span className="text-sm font-bold text-dark-700">$234</span>
          </div>
          <div className="p-6">
            <h5 className="text-lg font-semibold text-dark-500">Join at</h5>
            <span className="text-sm font-bold text-dark-700">
              23 / 09 / 15
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
