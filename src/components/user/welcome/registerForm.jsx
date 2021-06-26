import React, { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import LoadingButton from "./loadingButton";
import { useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const schema = yup.object().shape({
  firstName: yup.string().required("First Name is require."), 
  lastName: yup.string().required("Last Name is require."), 
  username: yup.string().required("Username is require."), 
  mail: yup.string().required("Mail is require."), 
  birthDate: yup.string().required("Birth Date is require."), 
  password: yup.string().required("Password is require."), 
  terms: yup.bool().required().oneOf([true], "Terms must be accepted"),
});

function RegisterForm() {
  const { register } = useAuth();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [birthDate, setBirthDate] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    register({ email, password, firstName, lastName, userName, birthDate });
    history.push("/Pedro");
  }

  function onChange(value) {
  console.log(value);
  setFirstName(value);
  console.log(firstName);
  };

  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: "",
        lastName: "",
        username: "",
        mail: "",
        birthDate: "",
        terms: false,
      }}
    >
      {({ handleChange, handleBlur, values, touched, isValid, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                name="firstName"
                onChange={(e) => onChange(e.target.value)}
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
                onChange={(e) => setLastName(e.target.value)}
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
                  onChange={(e) => setUserName(e.target.value)}
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
                onChange={(e) => setEmail(e.target.value)}
                isInvalid={!!errors.mail}
              />
            </Form.Group>
            <Form.Group as={Col} md="5" controlId="validationFormik04">
              <Form.Label>Birth Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter date"
                name="birthDate"
                onChange={(e) => setBirthDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} md="7" controlId="validationFormik05">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                isInvalid={!!errors.password}
              />
            </Form.Group>
            <Form.Group as={Col} md="7" controlId="validationFormik06">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
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
