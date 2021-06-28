import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

class Signup extends Component {
  state = {
    user: {
      name: "",
      phoneNumber: "",
      adress: "",
      password: "",
    },
  };

  inputsHandler = e => {
    const {name, value} = e.target;
    console.log(name, value);
    
  }

  submitsHandler = (e) => {
    e.preventDefault();
    console.log("Form submit", this.state.name);
  };



  render() {
    const {name, phoneNumber, adress, password} = this.state;

    return (
      <Form onSubmit={this.submitsHandler}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Full name</Form.Label>
          <Form.Control
            onChange={this.inputsHandler}
            type="name"
            name="name"
            value={name}
            placeholder="Name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            onChange={this.inputsHandler}
            type="number"
            placeholder="Number"
            value={phoneNumber}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Adress</Form.Label>
          <Form.Control
            onChange={this.inputsHandler}
            type="adress"
            placeholder="Enter adress"
            value={adress}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={this.inputsHandler}
            type="password"
            placeholder="Password" 
            value={password}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          SignUp
        </Button>

        <div className={"photo"}>
          <h4>Upload Profile Pictyre</h4>
          <div className={"avatar"}>img</div>
          <button>Choose photo from URL</button>
          <button>Choose photo from your computer</button>
        </div>
      </Form>
    );
  }
}

export default Signup;

//<div className={'signup'}>
//  <div>
//    <form className={'forms'}>
//      <label><h6>Full name</h6></label>
//      <input className={'input'} type='text' name='name' value='' />
//      <label><h6>Phone number</h6></label>
//      <input className={'input'} type='adress' name='number' value='' />
//      <label><h6>Adress</h6></label>
//      <input className={'input'} type='text' name='adress' value='' />
//      <label><h6>Password</h6></label>
//      <input className={'input'} type='password' name='password' value='' />
//      <button>Create account</button>
//    </form>
//  </div>
//  <div className={'photo'}>
//    <h4>Upload Profile Pictyre</h4>
//    <div className={'avatar'}>img</div>
//    <button>Choose photo from URL</button>
//    <button>Choose photo from your computer</button>
//  </div>
//</div>
//
