import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { loginUser } from '../../actions/auth';
import SquareBox from '../template/square-box';

const form = reduxForm({
  form: 'login',
});

class Login extends Component {
  
  handleFormSubmit(formProps) {
    this.props.loginUser(formProps);
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div>
          <span><strong>Error!</strong> {this.props.errorMessage}</span>
        </div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="Login">
        <h1>Login</h1>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          {this.renderAlert()}
          <div>
            <label>Email</label>
            <Field name="email" className="form-control" component="input" type="text" />
          </div>
          <div>
            <label>Password</label>
            <Field name="password" className="form-control" component="input" type="password" />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
        <Link to="/forgot-password">Forgot Password?</Link>
        <div>
          
          <h3>Don't have an account? Register <Link to="register">here.</Link></h3>
          
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error,
    message: state.auth.message,
    authenticated: state.auth.authenticated,
  };
}

export default connect(mapStateToProps, { loginUser })(form(Login));
