import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addAccess } from '../actions';
import { users } from '../data';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const login = e.target.login.value;
    const password = e.target.password.value;
    // Atualiza a store
    this.props.logpass(login, password);
    // Atualiza o estado interno
    this.setState({
      login,
      password,
    });
    const propsLogin = this.props.storeUser.login;
    const propsPassword = this.props.storeUser.password;
    if (propsLogin === users[0].login && propsPassword === users[0].password) {
      this.props.history.push('/customers');
      {localStorage.setItem('access', JSON.stringify(true))}
    } else {
      alert('Wrong login!');
    }
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <Link to="/">Home</Link>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="login" /><br />
          <input type="password" name="password" /><br />
          <button type="submit">Logar</button>
        </form>
      </div>
    );
  };
}

const mapStateToProps = (state) => ({
  storeUser: state.userAccessReducer
});

const mapDispatchToProps = (dispatch) => ({
  logpass: (login, password) => dispatch(addAccess(login, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
