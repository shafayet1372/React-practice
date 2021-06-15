import React from 'react'

class Bulk extends React.Component{

    render(){
     return(
        <div>
        <div className="d-flex  justify-content-end">
        <button className="btn btn-primary m-2" onClick={this.props.bulk}>Bulk</button>
        <button className="btn btn-danger m-2" onClick={this.props.delete}>Delete</button>
        <button className="btn btn-danger m-2" onClick={this.props.reset}>Reset</button>
        </div>
    </div>
     )
      
    }
}

export default Bulk