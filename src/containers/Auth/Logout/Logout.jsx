import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../../redux/actions';
import { Redirect } from 'react-router-dom';

class Logout extends Component {
  componentDidMount() {
    this.props.handleLogout();
  }
  render() {
    return <Redirect to="/" />;
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleLogout: () => dispatch(logout()),
  };
};

export default connect(null, mapDispatch)(Logout);
