import React, { Component } from 'react';
import  Joi  from 'joi-browser';
import Input from './input';

class LoginForm extends Component {

 //username = React.createRef();this will creat a ref object.you should minimize your use of refs,for example manage the foucs of an input field
 // componentDidMount() {
 //  this.username.current.focus();
 // }

 state = {
  account: { username: '', password: '' },
  errors: {}
 };

  schema = {
    username: Joi.string().required(),
    password: Joi.string().required()
  }

  validate = () => {//validate entire form
    const resault = Joi.validate(this.state.account, this.schema, {abortEarly: false});
    console.log(resault);
    const errors = {};

  const { account } = this.state;
  if (account.username.trim() === '') errors.username = 'Username is requierd';
  if (account.password.trim() === '') errors.password = 'Password is requierd';
  
  return (Object.keys(errors).length === 0 ? null : errors);
}

 handleSubmit = e => {
  e.preventDefault();
  const errors = this.validate();
  this.setState({errors : errors || {}});
  if (errors) return;
  //Call the sever
  console.log("Submitted");
  }
  validateProperty = ({name, value}) => {//validate on input
    if (name === 'username') {
      if (value.trim() === '') return 'Username is required';
      //...
    }
    if (name === 'password') {
      if (value.trim() === '') return 'Password is required';
      //...
    } 
  }

  handleChange = ({ currentTarget: input }) => {
  const errors = { ...this.state.errors };
  const errorMassage = this.validateProperty(input);
  if (errorMassage) errors[input.name] = errorMassage;
  else delete errors[input.name];

  const account = { ...this.state.account };
  account[input.name] = input.value;
  this.setState({account, errors});
 }

 render() { 
  const { account, errors } = this.state; 
  return (
   <div>
    <h1>Login</h1>
    <form onSubmit={this.handleSubmit}>
     <Input
      name='username'
      label='Username'
      value={account.username}
      onChange={this.handleChange}
      error = {errors.username}
     />
     <Input
      name='password'
      label='Password'
      value={account.password}
      onChange={this.handleChange}
      error = {errors.password}
     />
     <button className="btn btn-primary">Login</button>
    </form>
   </div>
  );
 }
}

export default LoginForm;