import React from 'react'

import './app.css'

class Data extends React.Component{

    render(){
     return(
     <div className="mt-5 shadow1 " >
         <div className="clearfix ">
            <p className="float-start"> {this.props.value.name}</p>
            <button 
            
            
            className={this.props.value.com?"btn btn-success float-end mt-3":"btn btn-danger float-end mt-3"}
            onClick={()=>{
                this.props.change(this.props.value.id)
            }}
            
            >
                
                {this.props.value.com?"completed":"uncompleted"}</button>
         </div>
         <input type="checkbox" checked={this.props.value.check} onChange={()=>{
             this.props.checkHandle(this.props.value.id)
         }}/>
        
        
    </div>
     )
      
    }
}

export default Data