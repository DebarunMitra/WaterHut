import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../../actions/auth';
import Logo from './../../img/waterHut.png'

const Navbar=({auth:{isAuthenticated, loading}, logout})=>{
  const authLinks=(
    <ul>
      <li>
          <Link to="/dashboard">
          <i className="fas fa-user" ></i>{' '}
          <span className="hide-sm">Dashboard</span>
          </Link>
      </li>
      <li><a href="#!" onClick={logout} >
        <i className="fas fa-sign-out-alt" ></i>{' '}
        <span className="hide-sm"></span>
        Logout
      </a></li>
    </ul>
  );

  const guestLinks=(
    <ul>
      <li><Link to="#!">Dashboard</Link></li>
      <li><Link to="/register">Register</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
          <img src = {Logo} alt = "" style={{width:"40px",height:"40px"}} />
         {!loading && (<Fragment>{isAuthenticated?authLinks:guestLinks}</Fragment>)}
       </nav>
  );
}

Navbar.propTypes={
  logout:PropTypes.func.isRequired,
  auth:PropTypes.object.isRequired
}

const mapStateToProps=state=>({
  auth:state.auth
});

export default connect(mapStateToProps,{logout})(Navbar);
