import React from 'react';
import GetRequest from './GetRequest';
class CRUD extends React.Component{
    constructor(){
        super();
        this.state={
            getAPI: "https://rest-api-node.herokuapp.com/users",
            postAPI: "https://rest-api-node.herokuapp.com/users/create",
            updateApi: "https://rest-api-node.herokuapp.com/users/update/:id",
            getByIdAPI:"https://rest-api-node.herokuapp.com/users/select/:id",
            deleteAPI:"https://rest-api-node.herokuapp.com/users/delete/:id"
        }
    }
    render(){
        return(
        <div className= "CRUD-operations">
        <GetRequest getApi= {this.state.getAPI}/>
        </div>);
    }
}
export default CRUD;