import React, { useState } from "react";
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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const showPassword = () => setShow(!show);
  const showRePassword = () => setReShow(!reShow);

  const passwordsMatch = () => {
    return password === rePassword;
  };

  const validatePassword = (value) => {
    if (!value) {
      return false;
    }
    if (value.length < 8) {
      return false;
    }
    return true;
  };

  const validateRePassword = (value) => {
    if (!value) {
      return false;
    }
    if (value.length < 8) {
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    auth
      .register({
        email,
        password,
        firstName,
        lastName,
        userName,
        birthDate,
      })
      .then((res) => {
        history.push("/userPage");
      });
  };

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} md="4" name="firstName">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            placeholder="Name"
          />
          <Form.Control.Feedback type="invalid">
            {" "}
            Looks good!{" "}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" name="lastName">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            placeholder="Last Name"
          />
          <Form.Control.Feedback type="invalid">
            {" "}
            Looks good!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" name="userName">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              required
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
            />
            <Form.Control.Feedback type="invalid">
              Please choose a UserName.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} md="7" name="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter Mail"
          />
          <Form.Control.Feedback type="invalid">
            Looks good!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="5" name="birthDate">
          <Form.Label>Birth Date</Form.Label>
          <Form.Control
            required
            onChange={(e) => setBirthDate(e.target.value)}
            type="date"
          />
        </Form.Group>

        <Form.Group as={Col} md="7" name="password">
          <Form.Label>Password</Form.Label>
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
                      class="bi bi-eye-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                    </svg>
                  ) : (
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
                  )
                }
                onClick={showPassword}
              />
            </InputGroup.Prepend>
            <Form.Control
              require
              type={show ? "text" : "password"}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="7" name="rePassword">
          <Form.Label>Confirm your password</Form.Label>
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
                      class="bi bi-eye-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                    </svg>
                  ) : (
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
                  )
                }
                onClick={showRePassword}
              />
            </InputGroup.Prepend>
            <Form.Control
              require
              type={reShow ? "text" : "password"}
              placeholder="Confirm Password"
              onChange={(e) => setRePassword(e.target.value)}
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Form.Group>
      </Form.Row>

      <Form.Group>
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
        />
      </Form.Group>
      <Button type="submit">Register!</Button>
    </Form>
  );
}

export default RegisterForm;
