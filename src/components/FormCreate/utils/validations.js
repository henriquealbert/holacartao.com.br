import * as Yup from 'yup';

export const validations = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Seu nome de usuário deve ter no mínimo 3 caracteres')
    .required('O nome de usuário é um campo obrigatório.'),
  email: Yup.string()
    .email('O e-mail deve ser válido.')
    .required('O e-mail é um campo obrigatório.'),
  password: Yup.string()
    .min(8, 'Sua senha deve ter no mínimo 8 caracteres.')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      'Sua senha deve conter pelo menos uma letra e um número.'
    )
    .required('A senha é um campo obrigatório.'),
  occupation: Yup.string('Escolha uma área de atuação.').required(
    'Você deve escolher sua área de atuação.'
  ),
  terms: Yup.boolean().oneOf(
    [true],
    'Para criar uma conta você deve aceitar os nossos Termos de Uso.'
  )
});
