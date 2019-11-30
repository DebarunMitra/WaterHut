import React, {Fragment, useState, useEffect} from 'react';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createConsumer, getCurrentConsumer} from '../../actions/consumer';

const EditConsumer =({
  consumer:{consumer,loading},
  createConsumer,
  getCurrentConsumer,history})=>{
  const [formData, setFormData]=useState({
      person:'',
      tap:'',
      shower:'',
      flush:'',
      washingMachine:'',
      dishWasher:'',
      filter:''
  });

  useEffect(()=>{
    getCurrentConsumer();
    setFormData({
    person: loading || !consumer.person ? '' : consumer.person,
    tap: loading || !consumer.tap ? '' : consumer.tap,
    shower: loading || !consumer.shower ? '' : consumer.shower,
    flush: loading || !consumer.flush ? '' : consumer.flush,
    washingMachine: loading || !consumer.washingMachine ? '' : consumer.washingMachine,
    dishWasher: loading || !consumer.dishWasher ? '' : consumer.dishWasher,
    filter: loading || !consumer.filter ? '' : consumer.filter
  });
}, [loading, getCurrentConsumer]);


  const {
    person,
    tap,
    shower,
    flush,
    washingMachine,
    dishWasher,
    filter
  }=formData;


    const onChange=e=>setFormData({...formData, [e.target.name]:e.target.value });

    const onSubmit=e=>{
      e.preventDefault();
      createConsumer(formData, history, true);
    }
  return (
    <Fragment>
    <h1 className="large text-primary">
      Consuming Item Details
    </h1>
    <p className="lead">
      <i className="fas fa-user"></i> Let's get some information to make your
      profile stand out
    </p>
    <small>* = required field</small>
    <form className="form" onSubmit={e=>onSubmit(e)}>
    <div className="form-group">
      <input type="number" placeholder="Person" name="person" value={person} onChange={e=>onChange(e)}/>
      <small className="form-text"> Total number of persons in your family or house</small>
    </div>
    <div className="form-group">
      <input type="number" placeholder="Tap" name="tap" value={tap} onChange={e=>onChange(e)}/>
      <small className="form-text">Total number of tap's in your house</small>
    </div>
    <div className="form-group">
      <input type="number" placeholder="Shower" name="shower" value={shower} onChange={e=>onChange(e)} />
      <small className="form-text">Total number of shower in your house</small>
    </div>
    <div className="form-group">
      <input type="number" placeholder="Flush" name="flush" value={flush} onChange={e=>onChange(e)} />
      <small className="form-text">Total number of flush in your house</small>
    </div>
    <div className="form-group">
      <input type="number" placeholder="Washing Machine" name="washingMachine" value={washingMachine} onChange={e=>onChange(e)} />
      <small className="form-text">Total number of washing machine in your house</small>
    </div>
    <div className="form-group">
      <input type="number" placeholder="Dish Washer" name="dishWasher" value={dishWasher} onChange={e=>onChange(e)} />
      <small className="form-text">Total number of dish washer in your house</small>
    </div>
    <div className="form-group">
      <input type="number" placeholder="Water Filter" name="filter" value={filter} onChange={e=>onChange(e)} />
      <small className="form-text">Total number of water filter in your house</small>
    </div>
      <input type="submit" className="btn btn-primary my-1" />
      <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>
    </form>
    </Fragment>
  );
}

EditConsumer.propTypes={
  createConsumer: PropTypes.func.isRequired,
  getCurrentConsumer: PropTypes.func.isRequired,
  consumer: PropTypes.object.isRequired
}

const mapStateToProps=state=>({
  consumer:state.consumer
})

export default connect(mapStateToProps,{createConsumer, getCurrentConsumer})(withRouter(EditConsumer));
