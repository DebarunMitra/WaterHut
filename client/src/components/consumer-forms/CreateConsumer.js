import React, {Fragment, useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createConsumer} from '../../actions/consumer';

const CreateConsumer =({CreateConsumer, history})=>{
  const [formData, setFormData]=useState({
    person:'',
      tap:'',
      shower:'',
      flush:'',
      washingMachine:'',
      dishWasher:'',
      filter:''
  });

  const [displaySocialInputs, toggleSocialInputs]=useState(false);

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
      createConsumer(formData, history);
    }
  return (
    <Fragment>
    <h1 className="large text-primary">
      Consuming Item's Details
    </h1>
    <p className="lead">
      <i className="fas fa-user"></i> Let's enter the bellow details
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
      <a className="btn btn-light my-1" href="dashboard.html">Go Back</a>
    </form>
    </Fragment>
  );
}

CreateConsumer.propTypes={
  createConsumer: PropTypes.func.isRequired
}

export default connect(null,{createConsumer})(withRouter(CreateConsumer));
