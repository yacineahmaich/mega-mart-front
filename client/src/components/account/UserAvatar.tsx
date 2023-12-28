import { ChangeEvent, FC } from 'react'
import { useUploadAvatar } from '../../services/account/useUploadAvatar'
import { PencilIcon } from '@heroicons/react/24/outline'
import Spinner from '../ui/Spinner'
import clsx from 'clsx'
import { getAvatarUrlFromName } from '../../utils/helpers'
type Props = {
  user: User
}
const UserAvatar: FC<Props> = ({ user }) => {
  const { mutate: uploadAvatar, isLoading } = useUploadAvatar()

  const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    const avatar = e.target.files[0]

    if (!avatar) return

    uploadAvatar({ avatar: avatar })
  }

  return (
    <div className="relative overflow-hidden rounded-full group w-36 h-36">
      <div
        className={clsx(
          'absolute inset-0 items-center justify-center group-hover:flex bg-black/50',
          {
            flex: isLoading,
            hidden: !isLoading,
          }
        )}
      >
        {isLoading && <Spinner />}
        {!isLoading && (
          <>
            <label
              htmlFor="avatar"
              className="p-2 rounded-full cursor-pointer bg-light/20"
            >
              <PencilIcon className="w-5 h-5 text-white" />
            </label>
            <input
              type="file"
              className="hidden"
              id="avatar"
              onChange={handleAvatarChange}
            />
          </>
        )}
      </div>
      {user.avatar ? (
        <img
          src={user.avatar.url ?? getAvatarUrlFromName(user.name)}
          alt={user.avatar.name}
          className="object-cover w-full h-full"
        />
      ) : (
        <div className="flex items-center justify-center w-full h-full text-white bg-primary-600">
          <span className="text-6xl font-bold uppercase">{user.name[0]}</span>
        </div>
      )}
    </div>
  )
}

export default UserAvatar
