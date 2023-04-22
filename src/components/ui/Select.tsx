import { Dispatch, FC, Fragment, SetStateAction } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/24/solid'

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
      {({ open }) => (
        <div className="relative">
          <Listbox.Button className="flex items-center justify-between w-auto px-4 py-3 text-xs border rounded-lg border-gray bg-light sm:w-52 text-dark-600">
            <span>{selectedOption.label}</span>
            <ChevronUpIcon
              className={`w-4 transition-transform ${
                open ? 'rotate-180' : 'rotate-0'
              }`}
            />
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
            <Listbox.Options className="absolute right-0 z-10 mt-2 overflow-hidden border rounded-lg shadow outline-none top-full border-gray">
              {options.map((op, idx) => (
                <Listbox.Option
                  key={idx}
                  value={op}
                  className={({ active }) =>
                    `flex items-center justify-between px-4 py-3 text-xs bg-white cursor-pointer w-52 hover:bg-light text-dark-600 ${
                      active ? 'bg-[#f5f5f5f5]' : ''
                    }`
                  }
                >
                  {op.label}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  )
}

export default Select
