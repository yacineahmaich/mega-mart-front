import * as Yup from 'yup'

export const signupSchema = Yup.object({
  name: Yup.string().min(4).required(),
  email: Yup.string().email().required(),
  password: Yup.string()
    .min(6)
    .matches(
      /^[0-9A-Za-z]*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?][0-9a-zA-Z]*$/,
      'password should have at least one special character'
    )
    .required(),
  passwordConfirmation: Yup.string()
    .required('please confirm your password.')
    .oneOf([Yup.ref('password')], 'passwords must match'),
})
export const loginSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
})
