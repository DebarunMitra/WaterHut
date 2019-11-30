import axios from 'axios';
import {setAlert} from './alert';

import {
  GET_PROFILE,
  PROFILE_ERROR
} from './types';

//GET current user profile
export const getCurrentProfile=()=>async dispatch=>{
  try{
    const res=await axios.get('http://localhost:5020/api/profile/me');
    dispatch({
      type: GET_PROFILE,
      payload:res.data
    });

  }catch(err){
    dispatch({
      type:PROFILE_ERROR,
      payload:{ msg:err.response.ststusText, status: err.response.status }
    });
  }
}


//create or update profile
export const createProfile=(formData, history, edit=false)=>async dispatch=>{
  console.log(formData);
  try{
    const config={
      headers:{
        'Content-Type':'application/json'
      }
    }

    const res=await axios.post('http://localhost:5020/api/profile',formData,config);
    dispatch({
      type: GET_PROFILE,
      payload:res.data
    });

    dispatch(setAlert(edit?'Profile Updated' : 'Water Consumers Data Loaded...'));

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
      type:PROFILE_ERROR,
      payload:{ msg:err.response.ststusText, status: err.response.status }
    });
  }
}
