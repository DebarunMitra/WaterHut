import React, {Fragment, useState, useEffect} from 'react';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getCurrentConsumer} from '../../actions/consumer';

const ItemDetails=({
  consumer:{consumer,loading},
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

  return (
    <div>
     <h2 className="my-2">Water Consuming Item's Details:</h2>
        <table className="table">
        <thead>
          <tr>
            <th className="hide-sm">TAP</th>
            <th className="hide-sm">SHOWER</th>
            <th className="hide-sm">FLUSH</th>
            <th className="hide-sm">WASHING MACHINE</th>
            <th className="hide-sm">DISH WASHER</th>
            <th className="hide-sm">WATER FILTER</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="hide-sm">{tap}</td>
            <td className="hide-sm">{shower}</td>
            <td className="hide-sm">{flush}</td>
            <td className="hide-sm">{washingMachine}</td>
            <td className="hide-sm">{dishWasher}</td>
            <td className="hide-sm">{filter}</td>
          </tr>
        </tbody>
        </table>
   </div>
  );
}


ItemDetails.propTypes={
  getCurrentConsumer: PropTypes.func.isRequired,
  consumer: PropTypes.object.isRequired
}

const mapStateToProps=state=>({
  consumer:state.consumer
})

export default connect(mapStateToProps,{getCurrentConsumer})(withRouter(ItemDetails));
