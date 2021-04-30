import React, {useEffect} from "react";
import PostRequest from './PostRequest';
import {useState} from 'react';
import axios from "axios";
import './CRUD.css';
import "../index.css";

const GetRequest =({getApi}) => {
  const [users, setUsers] = useState([]);
  const [edit, setEdit] = useState(false);
  const fetchData = async (e) => {
    const response = await axios.get(getApi);

    setUsers(response.data);
  };

  useEffect(fetchData);
  const saveUpdate= (e) =>{
    setEdit(false);
  }
  const renderEditForm=(index, user)=>{
   return(<tr className= "edit-form">
      <td>{index+1}.</td>
      <td><input defaultValue={user.username}/></td>
      <td><input defaultValue={user.email}/></td>
      <td><input defaultValue={user.nickname}/></td>
      <td><input type="file" defaultValue={user.photo}/></td>
      <button onClick={saveUpdate}>Save Update</button>
    </tr>);
  }
  return (
    <div className="get-request">
      <h1>Users List</h1>
    <table className= "users">
     <tr><th>Sr#</th><th>Name</th><th>email</th><th>Username</th><th>Photo</th><th>Click to EDIT</th></tr>
        {users &&
          users.map((user, index) => {
            const userName = user.username;
            const email = user.email;
            const nickName = user.nickname;
            const picture=user.photo;
            if(edit)
             return(renderEditForm(index,user))
            else{
            return(
              <tr>
               <td>{index+1}.</td>
               <td>{userName}</td>
               <td>{email}</td>
               <td>{nickName}</td>
               <td><img src={picture} alt="" border="3" height="100" width="100" /></td>
               <td><button onClick={()=>setEdit(true)}>Edit</button></td>
              </tr>
           );}
          })
        }
    </table>
    <PostRequest postApi= {"https://rest-api-node.herokuapp.com/users/create"}/>
    </div>
  );
};
export default GetRequest;


