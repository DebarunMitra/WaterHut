import React from 'react';
import {Link} from 'react-router-dom';


const ItemDetails=()=>{
  return (
    <div>
    <h2 className="my-2">Experience Credentials</h2>
       <table className="table">
       <thead>
         <tr>
           <th>Company</th>
           <th className="hide-sm">Title</th>
           <th className="hide-sm">Years</th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <td>Tech Guy Web Solutions</td>
           <td className="hide-sm">Senior Developer</td>
           <td className="hide-sm">
             02-03-2009 - 01-02-2014
           </td>
         </tr>
         <tr>
           <td>Traversy Media</td>
           <td className="hide-sm">Instructor & Developer</td>
           <td className="hide-sm">
             02-03-2015 - Now
           </td>
         </tr>
       </tbody>
       </table>
  </div>
  );
}

export default ItemDetails;
