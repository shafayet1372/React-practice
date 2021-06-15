

import React from "react"
import { Container, Row, Col } from 'reactstrap';
import ONE  from "./one"
import Two from "./two";
import TWO from './two'
import classes from './app.module.css'
class App extends React.Component{
 
  state={
    data:['holaa','php','java','javascript','python','ruby','c++','django'],
    search:[],
   
    value:"",
    
  }

  handleSearch=(event)=>{
    let values=event.target.value
    let newar=this.state.data.slice()
    let newar1=newar.filter(val=>{
      if(val.includes(values)){
        return val
      }
    })
    this.setState({
      search:[...newar1],
     
      value:values

    },()=>{
      if(!this.state.value){
        this.setState({
          search:[],
          value:''
        })
      }
    })
  }
  render(){
    const show=()=>{
     let newar=this.state.search.map((val,index)=>{
        return(
         <li className={`list-group-item ${classes.main} ${classes.hu} `}key={index+1}>{val}</li>
        )
      })
      return newar
    }
  return(
    <div>
    

<div className="container">

<form className="d-flex" >
   <input style={{width:'80%'}} className="form-control me-2" onChange={this.handleSearch}  value={this.state.value}type="search" placeholder="Search" aria-label="Search"/>
 
 </form>
 <ul className="list-group" style={{width:'80%'}}>
   {show()}
  
 </ul>
</div>


    </div>
  )
  }
}






export default App;
