import {
  GET_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE
} from '../actions/types';

const initialState={
  consumer:null,
  consumers:[],
  repos:[],
  loading:true,
  error:{}
}

export default function(state=initialState, action){
  const { type, payload }=action;


  switch(type){
    case GET_CONSUMER:
      return {
        ...state,
        consumer:payload,
        loading:false
      };
    case CONSUMER_ERROR:
      return {
        ...state,
        consumer:payload,
        loading:false
      };
    case CLEAR_CONSUMER:
      return {
        ...state,
        profile:null,
        repos:[],
        loading:false
      }
    default:
      return state;
  }
}
