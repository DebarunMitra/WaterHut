import axios from 'axios';
import {setAlert} from './alert';

import {
  GET_CONSUMER,
  CONSUMER_ERROR
} from './types';

//GET current consuming item
export const getCurrentConsumer=()=>async dispatch=>{
  try{
    const res=await axios.get('http://localhost:5020/api/consumers/consumeData');
    dispatch({
      type: GET_CONSUMER,
      payload:res.data
    });

  }catch(err){
    dispatch({
      type:CONSUMER_ERROR,
      payload:{ msg:err.response.ststusText, status: err.response.status }
    });
  }
}


//create or update profile
export const createConsumer=(formData, history, edit=false)=>async dispatch=>{
  console.log(formData);
  try{
    const config={
      headers:{
        'Content-Type':'application/json'
      }
    }

    const res=await axios.post('http://localhost:5020/api/consumers',formData,config);
    dispatch({
      type: GET_CONSUMER,
      payload:res.data
    });

    dispatch(setAlert(edit?'Consuming item Updated' : 'Water Consumers Data Loaded...'));

    if(!edit){
      history.push('/dashboard');
    }

  }catch(err){

    //  show error
    const errors=await err.response.data.errors;
    if(errors){
        errors.forEach(error=> dispatch(setAlert(error.msg,'danger')));
    }


    dispatch({
      type:CONSUMER_ERROR,
      payload:{ msg:err.response.ststusText, status: err.response.status }
    });
  }
}
