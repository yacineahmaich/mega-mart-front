import { ChangeEvent, FC, useState } from 'react'
import { PhotoIcon } from '@heroicons/react/24/outline'

type Props = {
  defaultPreview?: string
  onChange: (image: File) => void
  id: string
}

const ImageInput: FC<Props> = props => {
  const { id, onChange, defaultPreview } = props
  const [preview, setPreview] = useState(defaultPreview)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files?.[0]

    if (!image) return

    onChange(image)

    // update image preview
    setPreview(URL.createObjectURL(image))
  }

  return (
    <div className="relative flex items-center">
      <label htmlFor={id}>
        <div className="w-20 h-24 overflow-hidden bg-center bg-cover rounded-lg">
          {preview ? (
            <img
              src={preview}
              alt="preview"
              className="object-cover w-full h-full"
            />
          ) : (
            <picture className="flex items-center justify-center h-full bg-light ">
              <PhotoIcon className="w-6 h-6" />
            </picture>
          )}
          <input
            id={id}
            type="file"
            onChange={handleChange}
            className="rounded-lg form-input border-gray focus:ring-primary-600"
            hidden
          />
        </div>
      </label>
    </div>
  )
}

export default ImageInput
