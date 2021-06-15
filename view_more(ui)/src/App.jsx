

import React from "react"
import { Container, Row, Col } from 'reactstrap';
import ONE  from "./one"
import Two from "./two";
import TWO from './two'
class App extends React.Component{
  state={
    data:[
         {id:1,name:'shafayet',age:10},   {id:2,name:'shafayet',age:10},     {id:3,name:'shafayet',age:10},   
         {id:4,name:'shafayet',age:10},   {id:5,name:'shafayet',age:10},     {id:6,name:'shafayet',age:10},   
         {id:7,name:'shafayet',age:10},   {id:8,name:'shafayet',age:10},     {id:9,name:'shafayet',age:10},   
         {id:10,name:'shafayet',age:10},   {id:11,name:'shafayet',age:10},     {id:12,name:'shafayet',age:10},   
         {id:13,name:'shafayet',age:10},     {id:14,name:'shafayet',age:10},   {id:15,name:'shafayet',age:10},    

    ],
   start:0,
   end:3,
   length:3,
   
  }
 changeHandle=()=>{
   this.setState({
     end:this.state.end+3,
     length:this.state.length+3
   })
 }
  render(){
    const{start,end,data}=this.state
   
   const show=()=>{
    
  
      let newdata=data.slice(start,end)
      
      newdata=newdata.map(val=>{
        return (
          <tr key={val.id}>
      <td>{val.id}</td>
      <td>{val.name}</td>
      <td>{val.age}</td>
      
    </tr>
        )
      })
      return newdata
   }
    return (
      <div>
       <table className="table">
  <thead>
    <tr >
      <th>id</th>
      <th scope="col">Name</th>
      <th scope="col">age</th>
      
    </tr>  

    {show(this.state.start)}
    

  </thead>
  <tbody>
    
    
  </tbody>
</table>
<button disabled={this.state.end>=this.state.data.length?true:false} className="btn btn-success mt-2" onClick={()=>{
      this.changeHandle()
    }}  >{this.state.end>=this.state.data.length?"No more result":"View More"}</button>
<br />
<br />

<br />
<br />

      
      </div>
    )
  }
}






export default App;
