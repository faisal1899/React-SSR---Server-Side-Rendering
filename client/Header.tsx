import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const Header = ({ auth }) => {
  console.log('auth = ', auth);

  const authButton = auth ? (
    <a href="/api/logout">Logout</a>
  ) : (
    <a href="/api/login">Login</a>
  );

  // const authButton = auth ? (
  //   <Link to="/api/logout">Logout</Link>
  // ) : (
  //   <Link to="/api/login">Login</Link>
  // );

  return (
    <div>
      <Link to="/">Home</Link>
      <div>
        <Link to="/users">Users</Link>
        <Link to="/admins">Admins</Link>
        {authButton}
      </div>
    </div>
  );
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Header);