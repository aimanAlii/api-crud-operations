import React,{useState} from 'react';
import axios from 'axios';
const PostRequest = (postApi) =>{
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const onhandleNameChange=(e)=>{
       setName(e.target.value);
   };
  const onhandleEmailChange=(e)=>{
    setEmail(e.target.value);
   };
  const onhandlePassChange=(e)=>{
    setPassword(e.target.value);
   };
  const verifyPassword=(e)=>{
    if(e.target.value === password)
    document.getElementById("Button").disabled = false;
     else
      console.log("No Match!!!")
    };
  const handleSubmit = async (e) => {
    const userObject = {name:name, email:email, password:password};
    const response = await axios.post(postApi,userObject);
    console.log((response === 201)? "success" : "error") ;
    e.preventDefault();
    return;
  };
  return(
    <div className= "post-request">
        <h2>Add a User</h2>
        <form className="post-form">
                
            <label> Name </label>         
            <input type="text" name="firstname" size="15" onChange={onhandleNameChange} /> <br/>

            Email:  
            <input type="email" id="email" name="email" onChange={onhandleEmailChange} /> <br/>    
 
            Password:  
            <input type="Password" id="pass" name="pass"onChange={onhandlePassChange}/> <br/>   
  
            Re-type password:  
            <input type="Password" id="repass" name="repass" onChange={verifyPassword}/> <br/>  

            <button id="Button" style={{disabled:'true'}} onClick= {handleSubmit}>Submit</button>  
        </form>
    </div>
  );
    
}
export default PostRequest;