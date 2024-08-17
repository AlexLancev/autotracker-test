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
    .min(9, 'Пароль должен содержать не менее 9 символов')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,}$/,
      'Пароль должен содержать как минимум одну заглавную букву, одну строчную букву, одну цифру и один специальный символ',
    ),
});
