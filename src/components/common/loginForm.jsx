import React, { Component } from 'react';
import Input from './input';

class LoginForm extends Component {

 //username = React.createRef();this will creat a ref object.you should minimize your use of refs,for example manage the foucs of an input field
 // componentDidMount() {
 //  this.username.current.focus();
 // }

 state = {
  account: { username: '', password: '' }
 };

 handleSubmit = e => {
  e.preventDefault();
  //Call the sever
  console.log("Submitted");
 }
 
 handleChange = ({currentTarget:input}) => {
  const account = { ...this.state.account };
  account[input.name] = input.value;
  this.setState({account});
 }

 render() { 
  const { account } = this.state;
  return (
   <div>
    <h1>Login</h1>
    <form onSubmit={this.handleSubmit}>
     <Input
      name='username'
      label='Username'
      value={account.username}
      onChange={this.handleChange}
     />
     <Input
      name='password'
      label='Password'
      value={account.password}
      onChange={this.handleChange}
     />
     <button className="btn btn-primary">Login</button>
    </form>
   </div>
  );
 }
}
 
export default LoginForm;