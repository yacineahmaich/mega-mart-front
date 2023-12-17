import * as Yup from 'yup'

export const updateProfileSchema = Yup.object({
  name: Yup.string().min(4).required(),
  email: Yup.string().email().required(),
  password: Yup.string()
    .min(6)
    .matches(
      /^[0-9A-Za-z]*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?][0-9a-zA-Z]*$/,
      'password should have at least one special character'
    ),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'passwords must match')
    .when('password', {
      is: true,
      then: schema => schema.required(),
    }),
})
