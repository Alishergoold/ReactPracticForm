import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import SignUpComponent from "./SignUpComponent";

class Signup extends Component {
  state = {
    user: {
      name: "",
      phoneNumber: "",
      adress: "",
      password: ""
    },
    errors:{
      name: "",
      phoneNumber: "",
      adress: "",
      password: ""
    }
  };

  inputsHandler = e => {
    const {name, value} = e.target;
    this.setState((prevState)=>({
      ...prevState,
      user:{
        ...prevState.user,
        [name]:value,
      },
    }));
    //console.log(name, value,'-----', this.state);
  }

  submitsHandler = (e) => {
    e.preventDefault();
    const errors ={};
    const {user} = this.state;

    if(user.name.trim() === "") errors.name = "Ismingizni kiriting";
    if(user.phoneNumber.trim() === "") errors.phoneNumber = "Telefon raqamingizni kiriting";
    if(user.adress.trim() === "") errors.adress = "Manzilingizni kiriting";

    this.setState({errors:errors || {} })

    console.log("Form submit", this.state.user);
  };

  render() {
    const {name, phoneNumber, adress, password, errors} = this.state;
    console.log(this.state);
    return (
      <Form onSubmit={this.submitsHandler}>

        <SignUpComponent
          handler={this.inputsHandler}
          type="name"
          name="name"
          value={name}
          placeholder="Name"
          error={errors.name}
        />
        <SignUpComponent
            handler={this.inputsHandler}
            type="number"
            name="phoneNumber"
            placeholder="Number"
            value={phoneNumber}
            error={errors.phoneNumber}
        />
        <SignUpComponent
            handler={this.inputsHandler}
            name="adress"
            type="adress"
            placeholder="Enter adress"
            value={adress}
            error={errors.adress}
        />
        <SignUpComponent
          handler={this.inputsHandler}
          type="password"
          name="password"
          value={password}
          placeholder="Password"
        />

                {/*<Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Full name</Form.Label>
          <Form.Control
            onChange={this.inputsHandler}
            type="name"
            name="name"
            value={name}
            placeholder="Name" 
          />
        </Form.Group>*/}

{/*
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            onChange={this.inputsHandler}
            type="number"
            name="phoneNumber"
            placeholder="Number"
            value={phoneNumber}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Adress</Form.Label>
          <Form.Control
            onChange={this.inputsHandler}
            name="adress"
            type="adress"
            placeholder="Enter adress"
            value={adress}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={this.inputsHandler}
            name="password"
            type="password"
            placeholder="Password" 
            value={password}
          />
        </Form.Group>*/}

        <Button variant="primary" type="submit">
          SignUp
        </Button>

        {/*<div className={"photo"}>
          <h4>Upload Profile Pictyre</h4>
          <div className={"avatar"}>img</div>
          <button>Choose photo from URL</button>
          <button>Choose photo from your computer</button>
        </div>*/}
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
