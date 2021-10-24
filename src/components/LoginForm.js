import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }
   handleUserNameChange = (event) => {
     this.setState({
       username: event.target.value,
     });
   }

   handlePasswordChange = (event) => {
     this.setState({
        password: event.target.value,
     });
   }

   handleSubmit = (event) => {
     event.preventDefault();
     //The onSubmit callback prop should only be called if both 
     //fields are filled in (with any value).
      if (!this.state.username || !this.state.password) return 
       this.props.handleLogin(this.state) 
   }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={event => this.handleUserNameChange(event)} value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={event => this.handlePasswordChange(event)} value={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
