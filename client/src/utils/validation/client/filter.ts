import * as Yup from 'yup'

export const filterByPriceSchema = Yup.object({
  minPrice: Yup.number().positive().min(1).nullable(),
  maxPrice: Yup.number()
    .positive()
    .min(1)
    .moreThan(Yup.ref('minPrice'))
    .nullable(),
})
