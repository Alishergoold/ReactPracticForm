import React, { Component } from "react";
import Joi from "joi-browser";
import { Button, Form } from "react-bootstrap";
import Input from "./Input";

class SignIn extends Component {
  state = {
    user: {
      email: "",
      password: "",
      isAgree: null,
    },
    errors: {
      name: "",
      password: "",
    },
  };

  schema = {
    email: Joi.string().required().label("Email"),
    password: Joi.string().required().label("Password"),
  }

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] }
    const msg = Joi.validate(obj, schema)
    console.log(msg, "message");
  };

  inputHandler = ({target}) => {
    const { name, value } = target;
    const errors = { ...this.state.errors };
    const msg = this.validateProperty(target);

    if (msg) errors[name] = msg;
    else delete errors[name];

    console.log("input errors", errors);
    this.setState((prevState) => ({
      ...prevState,
      user: { ...prevState.user, [name]: value },
    }));
  }
  checkBoxHandler = (e) => {
    const { checked, name } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      user: { ...prevState.user, [name]: checked },
    }));
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log("form submitted", this.state.user);
  };
  
  render() {
    const { email, password, isAgree } = this.state;
    return (
      <Form onSubmit={this.submitHandler}>
        <Input
          name="email"
          value={email}
          handler={this.inputHandler}
          type="email"
          label="Enter you email"
        />
        <Input
          name="password"
          value={password}
          handler={this.inputHandler}
          type="password"
          label="Enter you password"
        />
        <Input
          name="isAgree"
          value={isAgree}
          handler={this.checkBoxHandler}
          type="checkbox"
          label="Do you agree."
          isCheckbox
        />

        {/*<Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            onChange={this.inputHandler} 
            name="password"
            type="password" 
            placeholder="Password"
            value={password}
          />
        </Form.Group>*/}

        {/*<Form.Group controlId="formBasicCheckbox">
          <Form.Check 
            onChange={this.checkBoxHandler} 
            type="checkbox" 
            name = "isAgree"
            checked = {isAgree}
            label="Do you agree."
          />
        </Form.Group>*/}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default SignIn;
