import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import DashboardActions from './DashboardActions';
import Spinner from '../layout/Spinner';


const Dashboard = ({getCurrentProfile, auth:{user}, profile:{profile,loading}}) =>{
  useEffect(()=>{
    getCurrentProfile()
  },[])
  return loading && profile === null ? <Spinner /> : <Fragment>
    <h1 className="large text-primary"></h1>
    <p className="lead">
    <i className="fas fa-user"></i>{' '}Welcome {user && user.name}
    </p>
    {profile.status !== 400?(
      <Fragment>
        <DashboardActions />
      </Fragment>
    ):(
      <Fragment>
      <p>You Have Not Enter Water Consuming Item Details</p>
      <Link to='./create-profile' className="btn btn-primary my-1">
        Enter Water Consuming Item
      </Link>
      </Fragment>
    )}
  </Fragment>
};

Dashboard.propTypes={
  getCurrentProfile : PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps=state=>({
  auth:state.auth,
  profile: state.profile
});

export default connect(mapStateToProps,{getCurrentProfile})(Dashboard);
