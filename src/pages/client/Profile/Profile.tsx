import { UserIcon } from '@heroicons/react/24/solid'
const Profile = () => {
  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold">
        <UserIcon className="inline w-6 h-6 mr-2" />
        <span className="align-middle">Profile</span>
      </h3>

      <div className="grid grid-cols-2 gap-4 p-4 border-2 rounded-lg border-dark-500">
        <div className="p-3 space-y-4">
          <h4 className="text-xl font-bold">Name</h4>

          <p>Yacine</p>
        </div>
        <div className="p-3 space-y-4">
          <h4 className="text-xl font-bold">User created At</h4>

          <p>2023 04 12</p>
        </div>
        <div className="p-3 space-y-4">
          <h4 className="text-xl font-bold">Country</h4>

          <p>Morocco</p>
        </div>
        <div className="p-3 space-y-4">
          <h4 className="text-xl font-bold">Email</h4>

          <p>yacine@gmail.com</p>
        </div>
        <div className="p-3 space-y-4">
          <h4 className="text-xl font-bold">Last Order</h4>

          <p>2023 09 12</p>
        </div>

        <div className="p-3 space-y-4">
          <h4 className="text-xl font-bold">User created At</h4>

          <p>2023 04 12</p>
        </div>
      </div>
    </div>
  )
}

export default Profile
