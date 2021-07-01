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
    error: {
      name: "",
      password: "",
    },
  };

  schema = ({
    email: Joi.string().required().label("Email"),
    password: Joi.string().required().label("Password"),
  })

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const {error} = Joi.validate(obj, schema);

    return error ? error.details[0].message : null;

    //console.log(error, "message");
  };

  inputHandler = ({target}) => {
    const { name, value } = target;
    const errors = { ...this.state.errors };
    const msg = this.validateProperty(target);

    if (msg) errors[name] = msg;
    else delete errors[name];

    this.setState((prevState) => ({
      ...prevState,
      user: { ...prevState.user, [name]: value, },
      errors,
    }));

    console.log(errors, "eeeeeeeeeeeeeerrrrrrrrrrrrrrr");
  }

  checkBoxHandler = (e) => {
    const { checked, name } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      user: { ...prevState.user, [name]: checked },
    }));
  };

  validate = () => {
    const {error} = Joi.validate(this.state.user, this.schema, {abortEarly:false});
    if(!error) return null;

    const errors = {}
    for (let item of errors.details){
      errors[item.path[0]] = item.message 
    }      
    
    console.log(errors.details);
    return errors
  }

  submitHandler = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({errors: errors || {} });

    if(errors)return;

    console.log("form submitted", this.state.user);
  };
  
  render() {
    const { email, password, isAgree, errors } = this.state;
    return (
      <Form onSubmit={this.submitHandler}>
        <Input
          name="email"
          value={email}
          handler={this.inputHandler}
          type="email"
          label="Enter you email"
          error={errors}
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
