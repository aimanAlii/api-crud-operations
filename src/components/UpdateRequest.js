import React,{useState} from 'react';
import axios from 'axios';
const UpdateRequest = (index, user) =>{
  const [name,setName]= useState(null);
  const [email,setEmail]= useState(null);
  const [pass,setPass]= useState(null);
  }
  return(
  <div className="update-form">
    <tr>
      <td>{index+1}.</td>
      <td><input type="text" defaultValue={user.username}/></td>
      <td><input type="text" defaultValue={user.email}/></td>
      <td><input type="text" defaultValue={user.nickname}/></td>
      <td><input type="file" defaultValue={user.nickname}/></td>
      <button onClick={saveUpdate}>Save Update</button>
    </tr>
  </div>);
};
export default UpdateRequest;