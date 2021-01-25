import * as yup from 'yup';

export const authFormValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Введите почту в формате example@email.com')
    .required('Это поле обязательно'),
  password: yup
    .string()
    .test(
      'password',
      'Пароль должен содержать не менее 8 символов',
      (password) => password.length > 7,
    )
    .required('Это поле обязательно'),
});
