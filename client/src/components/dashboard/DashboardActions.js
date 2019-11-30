import React from 'react';
import {Link} from 'react-router-dom';


const DashboardActions=()=>{
  return (
    <div className="dash-buttons">
         <Link to="/edit-consumer" className="btn btn-light"
           ><i className="fas fa-user-circle text-primary"></i> Edit Your details</Link>
       </div>
  );
}

export default DashboardActions
