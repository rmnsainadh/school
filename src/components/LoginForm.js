import React from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      password: ''
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic using the user ID and password values from state
    // Redirect the user to the desired page upon successful login
  }

  render() {
    return (
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="userId">User ID:</label>
            <input type="text" id="userId" name="userId" value={this.state.userId} onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <button type="submit">Log In</button>
          </div>
        </form>
        <Link to="/forgot-password" className="form-link">Forgot Password</Link>
        <br>
        </br>
        <Link to="/signup" className="form-link">Sign Up</Link>
      </div>
    );
  }
}

export default LoginForm;