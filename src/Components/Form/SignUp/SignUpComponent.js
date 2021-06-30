import React from 'react';
import { Form } from "react-bootstrap";

const SignUpComponent = ({ handler, type, name, value, placeholder, error }) => {
  return (
    <>
    <Form.Group className="mb-3" controlId="formGroupEmail">
      <Form.Label>{placeholder}</Form.Label>
      <Form.Control
        onChange={handler}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
      />
    </Form.Group>
    {error && <p>{error}</p>}
    </>
  );
};


export default SignUpComponent;