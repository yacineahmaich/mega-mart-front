import { FC } from 'react'
import StepperHorizontal from 'react-stepper-horizontal'

type Props = {
  activeStep: number
  changeActiveStep: React.Dispatch<React.SetStateAction<number>>
}
const Stepper: FC<Props> = ({ activeStep, changeActiveStep }) => {
  const steps = [
    { title: 'Delevery Information', onClick: () => changeActiveStep(0) },
    { title: 'Payment Method', onClick: () => changeActiveStep(1) },
    { title: 'Place Order', onClick: () => changeActiveStep(2) },
  ]

  return (
    <header className="p-6 mb-10 bg-primary-500">
      <div className="max-w-3xl mx-auto">
        <StepperHorizontal
          steps={steps}
          activeStep={activeStep}
          circleTop={0}
          defaultTitleColor={'#FFF'}
        />
      </div>
    </header>
  )
}

export default Stepper
