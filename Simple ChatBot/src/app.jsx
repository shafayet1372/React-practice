
import React, { Component } from 'react';


class App extends Component{
  

  state={
    value:"",
    reply:[
      ['hi','hello','hlw','hey'],['Hello welcome to our shop!! '],
      ['bye','see you','see you later','goodbye','gdbye'],['come again to our shop!!'],
      ["location","address",'House no'],['uttara sector & house -13'],
      ['buy','price'],['the price of the product is 200 tk'],
      ['open','close'],['our shop is opened from sat-thurs and closed on friday'],
      ["name",'nam'],["My name is ChatBot"],
      ['discount','offer'],["sorry there is no offer & discount available right now!!"],
      ['number','telephone','phone'],["contact us on 01861591932"],
      
    ],
    chatting:[],
    num:0
  }
  
  handleChange=(e)=>{
   this.setState({value:e.target.value})
  }
  handleSubmit=(e)=>{
    e.preventDefault()
    let result="Welcome";
    let counter=0;
for(let i=0;i<this.state.reply.length;i++){
    //  if(this.state.reply[i].includes(this.state.value)){
    //    result=this.state.reply[i+1][0]
    //    break;
    //  }
for(let j=0;j<this.state.reply[i].length;j++){
  if(this.state.value.includes(this.state.reply[i][j])){
    result=this.state.reply[i+1]
    counter++;
    break;
  }
 
}
if(counter){
  break;
}
   }
   const obj={}
   obj.chat=this.state.value;
   obj.replyChat=result
   this.setState({value:"",chatting:[...this.state.chatting,obj]})
   
  }
  render(){
  
    return(
      <div>
        <h1>Simple ChatBot</h1>

      <form action="" onSubmit={this.handleSubmit}>
      <input type="text"  value={this.state.value} onChange={this.handleChange} />
      <input type="submit" />
      </form>
      <ul>
        {this.state.chatting.map(val=>{
          return(
          <React.Fragment key={this.state.num++} >
            <li >{val.chat}</li>
            <li>{val.replyChat}</li>
          </React.Fragment>
          )
        })}
      </ul>
        </div>
    )
  }
}

export default App