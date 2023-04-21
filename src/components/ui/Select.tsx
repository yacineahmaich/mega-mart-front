import { Dispatch, FC, Fragment, SetStateAction } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

export type Option = {
  label: string
  value: string
}

type Props = {
  options: Option[]
  selectedOption: Option
  onChange: Dispatch<SetStateAction<Option>>
}

const Select: FC<Props> = ({ options, selectedOption, onChange }) => {
  return (
    <Listbox value={selectedOption} onChange={onChange}>
      <div className="relative">
        <Listbox.Button className="flex items-center justify-between px-4 py-3 text-xs rounded-lg w-52 text-dark-600 bg-light">
          <span>{selectedOption.label}</span>
          <ChevronDownIcon className="w-4" />
        </Listbox.Button>
        <Transition
          as={Fragment}
          enter="duration-200 transition-opcaity"
          enterFrom="-translate-y-3 opcaity-0"
          enterTo="opacity-100 translate-y-0"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute left-0 z-10 mt-2 overflow-hidden rounded-lg top-full">
            {options.map((op, idx) => (
              <Listbox.Option
                key={idx}
                value={op}
                className="flex items-center justify-between px-4 py-3 text-xs cursor-pointer w-52 hover:bg-gray text-dark-600 bg-light"
              >
                {op.label}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}

export default Select
