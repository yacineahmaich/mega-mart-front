import clsx from 'clsx'
import { FC } from 'react'

type Props = {
  className?: string
  fullpage?: boolean
}

const Spinner: FC<Props> = ({ className = '', fullpage = false }) => {
  return (
    <div
      className={
        fullpage
          ? 'absolute w-full h-full flex justify-center items-center'
          : ''
      }
    >
      <div className={clsx('p-2 mx-auto text-center', className)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{
            margin: 'auto',
            background: 'none',
            display: 'block',
            shapeRendering: 'auto',
          }}
          width="60px"
          height="60px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <circle cx="38" cy="50" fill="#17a0ad" r="12">
            <animate
              attributeName="cx"
              repeatCount="indefinite"
              dur="1.1764705882352942s"
              keyTimes="0;0.5;1"
              values="38;62;38"
              begin="-0.5882352941176471s"
            ></animate>
          </circle>
          <circle cx="62" cy="50" fill="#1bbccb" r="12">
            <animate
              attributeName="cx"
              repeatCount="indefinite"
              dur="1.1764705882352942s"
              keyTimes="0;0.5;1"
              values="38;62;38"
              begin="0s"
            ></animate>
          </circle>
          <circle cx="38" cy="50" fill="#17a0ad" r="12">
            <animate
              attributeName="cx"
              repeatCount="indefinite"
              dur="1.1764705882352942s"
              keyTimes="0;0.5;1"
              values="38;62;38"
              begin="-0.5882352941176471s"
            ></animate>
            <animate
              attributeName="fill-opacity"
              values="0;0;1;1"
              calcMode="discrete"
              keyTimes="0;0.499;0.5;1"
              dur="1.1764705882352942s"
              repeatCount="indefinite"
            ></animate>
          </circle>
        </svg>
      </div>
    </div>
  )
}

export default Spinner
