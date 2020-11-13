import Link from 'next/link';
import { ErrorMessage, Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import axios from 'axios';

import * as S from './styled';

export default function MyAccHelp() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validations = Yup.object().shape({
    name: Yup.string().required('O nome é um campo obrigatório.'),
    email: Yup.string()
      .email('O e-mail deve ser válido.')
      .required('O e-mail é um campo obrigatório.'),
    message: Yup.string().required('A mensagem é um campo obrigatório.')
  });

  const handleSubmit = (data, { resetForm }) => {
    setLoading(true);
    axios
      .post('http://localhost:1337/central-de-ajuda/sendHelp', data)
      .then((res) => {
        setLoading(false);
        setSuccess(true);
        resetForm();
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  return (
    <S.MyAccHelp>
      <h2>Está com algum problema?</h2>
      <Link href="/ajuda">
        <a>Visitar Central de Ajuda</a>
      </Link>
      <Formik
        initialValues={{
          name: '',
          email: '',
          message: ''
        }}
        validationSchema={validations}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form id="help-contact">
            <p>Entre em contato conosco:</p>
            <S.FormGroup>
              <S.FormItem style={{ marginRight: '1rem' }}>
                <Field type="text" name="name" id="name" placeholder="Nome" />
                <ErrorMessage component="span" name="name" />
              </S.FormItem>
              <S.FormItem>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="E-mail"
                />
                <ErrorMessage component="span" name="email" />
              </S.FormItem>
            </S.FormGroup>
            <S.FormGroup>
              <S.FormItem>
                <Field
                  as="textarea"
                  name="message"
                  id="message"
                  cols="30"
                  rows="5"
                  placeholder="Mensagem"
                />
                <ErrorMessage component="span" name="message" />
              </S.FormItem>
            </S.FormGroup>

            <S.buttonSubmit>
              <button type="submit">
                {loading ? 'Carregando... ' : 'Enviar'}
              </button>
            </S.buttonSubmit>
            {success ? <S.Success>E-mail enviado com sucesso!</S.Success> : ''}
          </Form>
        )}
      </Formik>
    </S.MyAccHelp>
  );
}
