import * as yup from 'yup'

export default yup.object().shape({
  username: yup.string()
    .required('Username is empty'),
  password: yup.string()
    .required('Password is empty')
    .min(3, 'Password must be 3 chars or longer'),
})
