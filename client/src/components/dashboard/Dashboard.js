import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { getCurrentConsumer } from '../../actions/consumer';
import DashboardActions from './DashboardActions';
import Spinner from '../layout/Spinner';


const Dashboard = ({getCurrentConsumer, auth:{user}, consumer:{consumer,loading}}) =>{
  useEffect(()=>{
    getCurrentConsumer()
  },[])
  return loading && profile === null ? <Spinner /> : <Fragment>
    <h1 className="large text-primary"></h1>
    <p className="lead">
    <i className="fas fa-user"></i>{' '}Welcome {user && user.name}
    </p>
    {consumer.status !== 400?(
      <Fragment>
        <DashboardActions />
      </Fragment>
    ):(
      <Fragment>
      <p>You Have Not Enter Water Consuming Item Details</p>
      <Link to='./create-consumer' className="btn btn-primary my-1">
        Enter Water Consuming Item
      </Link>
      </Fragment>
    )}
  </Fragment>
};

Dashboard.propTypes={
  getCurrentConsumer : PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps=state=>({
  auth:state.auth,
  consumer: state.consumer
});

export default connect(mapStateToProps,{getCurrentConsumer})(Dashboard);
