import { FC } from 'react'
type Props = {
  resource: string
}
const Empty: FC<Props> = ({ resource }) => {
  return (
    <tr className="p-6 bg-gray">
      <td colSpan={1000} className="p-6 text-sm font-medium text-center">
        no {resource} could be found!
      </td>
    </tr>
  )
}

export default Empty
