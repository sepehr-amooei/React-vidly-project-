import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./form";

class LoginForm extends Form {
  //username = React.createRef();this will creat a ref object.you should minimize your use of refs,for example manage the foucs of an input field
  // componentDidMount() {
  //  this.username.current.focus();
  // }

  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    //Call the sever
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
