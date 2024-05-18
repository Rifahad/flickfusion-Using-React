import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  Password: Yup.string()
    .required('No password provided.')
    .min(8, 'Too Short')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

export default validationSchema;