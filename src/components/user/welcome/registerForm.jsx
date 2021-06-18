import React from "react";
import { Formik } from "formik";
import * as yup from 'yup';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup"
import LoadingButton from "./loadingButton";



const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    mail: yup.string().required(),
    birthDate: yup.string().required(),
    password: yup.string().required(),
    terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
  });
  
  function RegisterForm() {
    return (
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          firstName: '',
          lastName: '',
          username: '',
          mail: '',
          birthDate: '',
          terms: false,
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="validationFormik01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  isValid={touched.firstName && !errors.firstName}
                  isInvalid={!!errors.firstName}  
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.firstName}
                  </Form.Control.Feedback>
                <Form.Control.Feedback>All Right!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormik02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  isValid={touched.lastName && !errors.lastName}
                />
  
                <Form.Control.Feedback></Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormikUsername">
                <Form.Label>Username</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    isInvalid={!!errors.username}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.username}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="7" controlId="validationFormik03">
                <Form.Label>Mail</Form.Label>
                <Form.Control
                  type="email" 
                  placeholder="Enter Mail"
                  name="mail"
                  onChange={handleChange}
                  isInvalid={!!errors.mail}
                />
              </Form.Group>
              <Form.Group as={Col} md="5" controlId="validationFormik04">
                <Form.Label>Birth Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Enter date"
                  name="birthDate"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group as={Col} md="7" controlId="validationFormik03">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password" 
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  isInvalid={!!errors.password}
                />
              </Form.Group>
              <Form.Group as={Col} md="7" controlId="validationFormik03">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password" 
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  isInvalid={!!errors.password}
                />
              </Form.Group>
            </Form.Row>
            <Form.Group>
              <Form.Check
                required
                name="terms"
                label="Agree to terms and conditions"
                onChange={handleChange}
                isInvalid={!!errors.terms}
                feedback={errors.terms}
                id="validationFormik0"
              />
            </Form.Group>
            <LoadingButton />
          </Form>
        )}
      </Formik>
    );
  }
  
  export default RegisterForm;