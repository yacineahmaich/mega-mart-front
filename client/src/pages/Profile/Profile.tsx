import { UserIcon } from '@heroicons/react/24/solid'
import { useProfile } from '../../services/account/useGetProfile'
import Spinner from '../../components/ui/Spinner'
import Error from '../../components/ui/Error'
const Profile = () => {
  const { data: profile, isLoading, isError, refetch } = useProfile()

  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold">
        <UserIcon className="inline w-6 h-6 mr-2" />
        <span className="align-middle">Profile</span>
      </h3>

      {isError ? (
        <Error retry={refetch} message="Failed to load profile data" />
      ) : isLoading ? (
        <Spinner />
      ) : (
        <div className="flex border divide-x divide-gray border-gray">
          <div className="w-1/2 divide-y divide-gray">
            <div className="p-6">
              <h5 className="text-lg font-semibold text-dark-500">Name</h5>
              <span className="text-sm font-bold text-dark-700">
                {profile.name}
              </span>
            </div>
            <div className="p-6">
              <h5 className="text-lg font-semibold text-dark-500">Email</h5>
              <span className="text-sm font-bold text-dark-700">
                {profile.email}
              </span>
            </div>
            <div className="p-6">
              <h5 className="text-lg font-semibold text-dark-500">
                Identifier:
              </h5>
              <span className="text-sm font-bold text-dark-700">
                {profile.identifier}
              </span>
            </div>
          </div>

          <div className="w-1/2 divide-y divide-gray">
            <div className="p-6">
              <h5 className="text-lg font-semibold text-dark-500">
                Total Orders
              </h5>
              <span className="text-sm font-bold text-dark-700">
                {profile.totalOrders}
              </span>
            </div>
            <div className="p-6">
              <h5 className="text-lg font-semibold text-dark-500">
                Total spented amount
              </h5>
              <span className="text-sm font-bold text-dark-700">
                ${profile.spentedAmount}
              </span>
            </div>
            <div className="p-6">
              <h5 className="text-lg font-semibold text-dark-500">Join at</h5>
              <span className="text-sm font-bold text-dark-700">
                {profile.joinAt}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Profile
