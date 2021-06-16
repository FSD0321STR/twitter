import React from 'react'
import {Form, Col, Button,InputGroup} from 'react-bootstrap'



function EditProfile() {
    return (
        <Form>
        <Form>
  <Form.Group>
    <Form.File id="exampleFormControlFile1" label="Upload your profile picture here" />
  </Form.Group>
</Form>
<Form>
  <Form.Group>
    <Form.File id="exampleFormControlFile1" label="Upload your header photo here" />
  </Form.Group>
</Form>
<Form>  
  
    <Form.Group as={Col}>
      <Form.Label>Name</Form.Label>
      <Form.Control type="text"  placeholder="Your User Name" />
    </Form.Group>

    <Form.Group as={Col}>
      <Form.Label>Biography</Form.Label>
      <Form.Control type="text" size="lg" placeholder="Tell Us About Yourself" />
    </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
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
    <Form.Control id="basic-url" aria-describedby="basic-addon3" />
  </InputGroup>

    </Form.Group>
    <Form.Group controlId="date">
          <Form.Label>Birthday</Form.Label>
          <Form.Control
            type="date"
          />
        </Form.Group>    
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

</Form>

    )


}


export default EditProfile