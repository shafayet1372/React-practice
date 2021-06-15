
import React from 'react'

class Filter extends React.Component{

    render(){
     return(
       <div>
        <div className="d-flex justify-content-start">
        <button onClick={this.props.completed} className="btn btn-primary" style={{margin:"4px"}}>completed</button>
        <button onClick={this.props.uncompleted}  className="btn btn-danger" style={{margin:"4px"}}>uncompleted</button>
        <button onClick={this.props.all}  className="btn btn-success" style={{margin:"4px"}}>All</button>
        </div>

      
    </div>
     )
      
    }
}

export default Filter