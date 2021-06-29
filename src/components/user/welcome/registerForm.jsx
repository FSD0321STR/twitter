import React, { useState } from "react";
import { Formik, Field } from "formik";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import { useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Button } from "react-bootstrap";

function RegisterForm() {
  const auth = useAuth();
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [reShow, setReShow] = useState(false);

  const showPassword = () => setShow(!show);
  const showRePassword = () => setReShow(!reShow);

  const validateEmail = (value) => {
    if (!value) {
      return "Email adress is required.";
    }
    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        value
      )
    ) {
      return "Please, introduce a valid email.";
    }
  };

  const validateFirstName = (value) => {
    if (!value) {
      return "Please, provide your first name.";
    }
  };

  const validateLastName = (value) => {
    if (!value) {
      return "Please, provide your last name.";
    }
  };

  const validateUserName = (value) => {
    if (!value) {
      return "Please, provide your Username.";
    }
  };

  const validateBirthDate = (value) => {
    if (!value) {
      return "Please, provide your birth date.";
    }
  };

  const passwordsMatch = (password, rePaswword) => {
    return password === rePassword;
  };

  const validatePassword = (value) => {
    if (!value) {
      return "Please, introduce a valid password.";
    }
    if (value.length < 8) {
      return "Password must have at least 8 characters.";
    }
  };

  const validateRePassword = (value) => {
    if (!value) {
      return "Please, repeat your password.";
    }
    if (value.legth < 8) {
      return "Password must have at least 8 characters.";
    }
  };

  const submitRegisterForm = async (values, actions) => {
    if (!passwordsMatch(values.password, values.rePassword)) {
      actions.setSubmitting(false);
      actions.validateField("password");
    }

    auth
      .register({
        email: values.email,
        password: values.password,
        firstName: values.firstName,
        lastName: values.lastName,
        userName: values.userName,
        birthDate: values.birthDate,
      })
      .then((res) => {
        actions.setSubmitting(false);
        history.push("/Pedro");
      });
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        birthDate: "",
        password: "",
        rePasword: "",
        terms: false,
      }}
      onSubmit={submitRegisterForm}
    >
      {(props) => (
        <Form>
          <Form.Row>
            <Field name="firstName" validate={validateFirstName}>
              {({ field, form }) => (
                <Form.Group as={Col} md="4">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    isRequired
                    type="text"
                    placeholder="Name"
                    name="firstName"
                  />
                  <Form.Control.Feedback> Looks good! </Form.Control.Feedback>
                </Form.Group>
              )}
            </Field>

            <Field name="lastName" validate={validateLastName}>
              {({ field, form }) => (
                <Form.Group as={Col} md="4">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    isRequired
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              )}
            </Field>
            <Field name="userName" validate={validateUserName}>
              {({ field, form }) => (
                <Form.Group as={Col} md="4">
                  <Form.Label>Username</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend">
                        @
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      isRequired
                      type="text"
                      placeholder="Username"
                      aria-describedby="inputGroupPrepend"
                      name="userName"
                    />
                  </InputGroup>
                </Form.Group>
              )}
            </Field>
          </Form.Row>
          <Form.Row>
            <Field name="email" validate={validateEmail}>
              {({ field, form }) => (
                <Form.Group as={Col} md="7">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    isRequired
                    type="email"
                    placeholder="Enter Mail"
                    name="email"
                  />
                </Form.Group>
              )}
            </Field>

            <Field name="birthDate" validate={validateBirthDate}>
              {({ field, form }) => (
                <Form.Group as={Col} md="5">
                  <Form.Label>Birth Date</Form.Label>
                  <Form.Control isRequired type="date" name="birthDate" />
                </Form.Group>
              )}
            </Field>
            <Field name="password" validate={validatePassword}>
              {({ field, form }) => (
                <Form.Group as={Col} md="7">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    isRequired
                    type={show ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    aria-describedby="basic-addon1"
                  />
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <Button
                        variant="outline-secondary"
                        children={
                          show ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-eye-slash"
                              viewBox="0 0 16 16"
                            >
                              <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                              <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                              <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-eye-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                              <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                            </svg>
                          )
                        }
                        onClick={showPassword}
                      />
                    </InputGroup.Prepend>
                  </InputGroup>
                </Form.Group>
              )}
            </Field>

            <Field name="rePassword" validate={validateRePassword}>
              {({ field, form }) => (
                <Form.Group as={Col} md="7">
                  <Form.Label>Confirm your password</Form.Label>
                  <Form.Control
                    isRequired
                    type={reShow ? "text" : "password"}
                    placeholder="Confirm Password"
                    name="password"
                    aria-describedby="basic-addon1"
                  />
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <Button
                        variant="outline-secondary"
                        children={
                          reShow ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-eye-slash"
                              viewBox="0 0 16 16"
                            >
                              <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                              <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                              <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-eye-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                              <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                            </svg>
                          )
                        }
                        onClick={showRePassword}
                      />
                    </InputGroup.Prepend>
                  </InputGroup>
                </Form.Group>
              )}
            </Field>
          </Form.Row>
          <Form.Group>
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              id="validationFormik0"
            />
          </Form.Group>
          <Button 
            bgGradient="linear(to-r, red.500, yellow.500"
            color="white"
            _hover={{
                    bgGradient: "linear(to-1, #7928CA, #FF0080)",
            }}
            isLoading={props.isSubmitting}
            type="submit">Register!</Button>
        </Form>
      )}
    </Formik>
  );
}

export default RegisterForm;
