import * as yup from 'yup';

export const contactDataValidationSchema = yup.object().shape({
  name: yup.string().required('Это поле обязательно'),
  street: yup.string().required('Это поле обязательно'),
  index: yup
    .string()
    .required('Это поле обязательно')
    .test('index', 'Должны содержаться только числа', (value) =>
      /^\d+$/.test(value),
    ),
  country: yup.string().required('Это поле обязательно'),
  email: yup
    .string()
    .email('Введите почту в формате example@email.com')
    .required('Это поле обязательно'),
});
