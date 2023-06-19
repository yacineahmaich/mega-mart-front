import { FC } from 'react'
import BlockLayout from './BlockLayout'
import Badge from '../ui/Badge'
type Props = {
  children?: React.ReactNode
}
const LatestOrders: FC<Props> = () => {
  return (
    <BlockLayout title="Latest Orders">
      <div className="h-full p-3">
        <table className="w-full overflow-hidden text-left shadow-lg">
          <thead className="bg-[#8884d8] text-white uppercase text-sm">
            <tr>
              <th className="p-2">#</th>
              <th className="p-2">customer</th>
              <th className="p-2">price</th>
              <th className="p-2">status</th>
              <th className="p-2">date</th>
            </tr>
          </thead>
          <tbody className="text-xs bg-white text-dark-500">
            {Array.from({ length: 6 }, (_, idx) => (
              <tr className="hover:bg-[#8884d8b7] hover:text-white transition-colors">
                <th className="p-3 underline text-dark-500">
                  kzs56jzs5gj5jzs99jsz
                </th>
                <td className="p-3">yacine xd</td>
                <td className="p-3">$223</td>
                <td className="p-3">
                  <Badge variant="success">Paid</Badge>
                </td>
                <td className="p-3">2023-09-14</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </BlockLayout>
  )
}

export default LatestOrders
