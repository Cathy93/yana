import React from 'react';
import {FormControl, FormGroup, Col, Form, ControlLabel, Checkbox, Button } from 'react-bootstrap';
import ButtonThin from '../components/ButtonThin';

const SignInForm = () => (
 <div>
 <Form horizontal>
    <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} sm={2}>
        Email
      </Col>
      <Col sm={10}>
        <FormControl type="email" placeholder="Email" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={2}>
        Password
      </Col>
      <Col sm={10}>
        <FormControl type="password" placeholder="Password" />
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Checkbox>Remember me</Checkbox>
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={2} sm={10}>
      <ButtonThin title="Log In"
                  buttonPath="/courses" />

      </Col>
    </FormGroup>
  </Form>
 </div>
)

export default SignInForm;
