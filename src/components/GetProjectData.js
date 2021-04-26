import React from "react";
//import axios from "axios";
export default class GetProjectData extends React.Component{
    constructor(){
        super();
        this.state= {
            projectList:[]
        }
        //this.fetchData = this.fetchData.bind(this);
    }
    
    fetchData= ()=>{
        const axios= require("axios");
        axios.get("https://rest-api-node.herokuapp.com/projects")
         .then((response)=>{
           
            const projectList= response.data;
            this.setState({projectList: projectList});
        
         }).catch(()=>{console.log("Error Loading...!")});
         
         
         
        
    }
    render(){
    return (
        <div className= "data-list">
         This is ProjectList.
         <button className = "get-data"  onClick={this.fetchData}>View Project Data</button>
         <table>
             <thead> <tr><td>Title</td><td>Version</td><td>Description</td></tr></thead>
             <tbody>
         {this.state.projectList.map((project)=>{
             const title= project.title;
             const version= project.version;
             const description= project.description; 
            return( 
                <tr>
                <td>{title}</td> 
                <td>{version}</td> 
                <td>{description}</td> 
                </tr>) ;
         })}
         </tbody>
         </table>
       
        </div>
    );
  }
}