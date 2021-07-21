import React, {useState} from 'react';
import { useFormik } from "formik";
import {Input, Submit, Form, Container, Error} from './styles';
import axios from 'axios';
import NewslatterSuccess from '../Newsletter';

export default function Newslatter() {
  const [newslatterTrue, setNewsLatterTrue] = useState(false);

  const validate = values => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Obrigátorio';
    } else if (values.name.length < 10) {
      errors.name = 'Preencha com seu nome completo';
    }

    if (!values.email) {
      errors.email = 'Obrigátorio';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Preencha com um e-mail válido';
    }

    return errors;
  };

  const handleSubmit = (values) => {
    axios
      .post('https://corebiz-test.herokuapp.com/api/v1/newsletter', {
        email: values.email,
        name: values.name,
      })
      .then(() => setNewsLatterTrue(true))
      .catch((err) => console.log(err))
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    validate,
    onSubmit: values => {
      handleSubmit(values);
    },
  });

  return (
    <>
      {newslatterTrue ? (
        <NewslatterSuccess />
      ) : (
        <Container>
          <h2>Participe de nossas news com promoções e novidades!</h2>
          <Form onSubmit={formik.handleSubmit}>
            <div>
              <Input
                type='text'
                name='name'
                id='name'
                placeholder='Digite seu nome'
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              {formik.errors.name ? <Error>{formik.errors.name}</Error> : null}
            </div>

            <div>
              <Input
                type='email'
                name='email'
                id='email'
                placeholder='Digite seu email'
                onChange={formik.handleChange}
                value={formik.values.email}
                />
              {formik.errors.email ? <Error>{formik.errors.email}</Error> : null}
            </div>
            <Submit type="submit">Eu quero!</Submit>
          </Form>
        </Container>
      )}
    </>
  )
}
