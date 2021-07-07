import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import useAuth from "../../../hooks/useAuth";
import { useHistory } from "react-router-dom";

function EditProfile() {
  const { editProfile } = useAuth();
  const history = useHistory();
  const [biography, setBiography] = useState("");
  const [firstName, setFirstName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [web, setWeb] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    editProfile({ firstName, biography, birthDate, web });
    history.push("/Jose");
  }

  return (
    <div>
      <Form.Row>
        <Form>
          <Form.Group>
            <Form.File
              id="exampleFormControlFile1"
              label="Upload your profile picture here"
            />
          </Form.Group>
        </Form>
        <Form>
          <Form.Group>
            <Form.File
              id="exampleFormControlFile2"
              label="Upload your header photo here"
            />
          </Form.Group>
        </Form>
      </Form.Row>
      <Form noValidate onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} md="5" controlId="validationFormik01">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your Name"
              name="firstName"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            <Form.Control.Feedback>All Right!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationFormik02">
            <Form.Label>Birth Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter date"
              name="birthDate"
              onChange={(e) => setBirthDate(e.target.value)}
              value={birthDate}
            />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} md="" controlId="validationFormik3">
              <Form.Label colum="lg" lg={4}>
                {" "}
                Biography
              </Form.Label>
              <Form.Control
                type="Text"
                placeholder="Tell Us About Yourself"
                name=" bio"
                onChange={(e) => setBiography(e.target.value)}
                value={biography}
              />
            </Form.Group>
          </Form.Row>
        </Form.Row>
      </Form>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridCity" md="5">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>
      </Form.Row>
      <Form.Group as={Col}>
        <label htmlFor="basic-url">Your vanity URL</label>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon3">
              https://example.com/
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            id="basic-url"
            aria-describedby="basic-addon3"
            onChange={(e) => setWeb(e.target.value)}
            value={web}
          />
        </InputGroup>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={(e) => this.onSubmit(e)}>
        Submit
      </Button>
    </div>
  );
}

export default EditProfile;
