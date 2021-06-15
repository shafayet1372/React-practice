

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
         {id:13,name:'shafayet',age:10},     {id:14,name:'shafayet',age:10},      

    ],
    disData:[],
    pageno:null,
    prev:false,
    next:false,
    len:null
  }
   totalPage=()=>{
    let len=(this.state.data.length%3)==0?this.state.data.length/3 :(this.state.data.length/3)+1;
    len=Math.floor(len)
   
    let newar=[]
   for(let i=1;i<=len;i++){
     let x= <li key={i} className={this.state.pageno==i?"page-item active":"page-item"}><a className="page-link" href={i} onClick={this.handle}>{i}</a></li>
     newar=[...newar,x]
   }
return newar
  }

 
   handle=(event)=>{
    event.preventDefault()
    this.pagination(parseInt(event.target.href.split("/")[3]))
      
   }
  pagination=(page)=>{
   
    let pageno=page
    let end=3*pageno;
    let start=end-3;
  
    let newar=this.state.data.slice(start,end)
         this.setState({
           disData:[...newar],
           pageno:page
         })
  }
   prev=(event)=>{
   event.preventDefault()
   this.pagination(this.state.pageno-1)
   }

   next=(event)=>{
    event.preventDefault()
    this.pagination(this.state.pageno+1)
   }

   prevdis=()=>{
  

    if((this.state.pageno-1)==0 || (this.state.pageno==null)){
      return true
    }
    return false
   }

   nextdis=()=>{
    if((this.state.pageno==null) ||(this.state.pageno==Math.floor((this.state.data.length/3+1)))){
      return true
    }
    return false
   }
  render(){
   
  //  const satrtshow=()=>{
  //   let newar=this.state.data.slice(this.start,this.end)
  //   let count=0;
  //    newar=newar.map((val,index)=>{
  //      return (
  //       <tr>
  //        <td>{++index}</td>
  //       <td>{val.name}</td>
  //       <td>{val.age}</td>
  //     </tr>
  //      )
  //    })

  //    return newar

  //  }
    return (
      <div>
       <table className="table">
  <thead>
    <tr>
      <th>id</th>
      <th scope="col">Name</th>
      <th scope="col">age</th>
      
    </tr>

      {/* {satrtshow()} */}
      {this.state.disData.map((val,index)=>{
         
        return (
          
          <tr key={index}>
           <td>{val.id}</td>
          <td>{val.name}</td>
          <td>{val.age}</td>
        </tr>
        )
      })}
  </thead>
  <tbody>
    
    
  </tbody>
</table>
<br />
<br />

<br />
<br />
<nav aria-label="Page navigation example">
  <ul className="pagination">
  <li className={this.prevdis()?"page-item disabled":"page-item "}><a className="page-link" href="" onClick={this.prev}>Previous</a></li>
    {this.totalPage()}
    <li className={this.nextdis()?"page-item disabled":"page-item "}><a className="page-link" href="" onClick={this.next}>Next</a></li>
  </ul>
</nav>
      
      </div>
    )
  }
}






export default App;
