import * as yup from 'yup';

export interface FormValues {
  password: string;
  email: string;
}

export const Schema: yup.ObjectSchema<FormValues> = yup.object().shape({
  email: yup
    .string()
    .required('Почта обязательна')
    .email('Введите корректную почту'),

  password: yup
    .string()
    .required('Пароль обязателен')
    .min(6, 'Пароль должен содержать не менее 6 символов'),
});
