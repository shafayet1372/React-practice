
import React from "react"
import Filter from './filter'
import Bulk from './bulk'
import Data from './data'
class Main extends React.Component{
   state={
       data:[{id:1,name:"reading",com:true,check:false},{id:2,name:"movie",com:true,check:false},{id:3,name:"writing",com:true,check:false}
    ],
    allStage:1,
    show:[],
    completeStage:null,
    uncompleteStage:null
   }

change=(id)=>{
      let newar=this.state.data.map(val=>{
        if(val.id==id){
          val.com=!val.com
        }
        return val
      })
     
      this.setState({
        data:[...newar]
      })

     
  }

clearCheckbox=()=>{
  let ar=this.state.data.map(val=>{
    return{
      ...val,
      check:false
    }
  })
  this.state.data=ar
}

completed=()=>{
  this.clearCheckbox()
 let newar=this.state.data.filter((val,index)=>{
   if(val.com==true){
     val.index=index
     return val
   }
 }) 
  console.log(this.state.data)
 this.setState({
   show:[...newar],
   
   allStage:0,
   completeStage:1,
   uncompleteStage:0
 })
}


uncompleted=()=>{
 this.clearCheckbox()
  let newar=this.state.data.filter((val,index)=>{
    if(val.com!=true){
      
    
     val.index=index
     return val
    }
  }) 
 
  this.setState({
    show:[...newar],
    allStage:0,
   
    uncompleteStage:1,
    completeStage:0
  })  
}

all=()=>{
this.setState({
  allStage:1,
  completeStage:null,
  uncompleteStage:null,
  show:[]
})
  
}

checkHandle=(id)=>{
  
  let newar=this.state.data.map(val=>{
    if(val.id==id){
      val.check=!val.check
    }
    return val
  })

  this.setState({
    data:[...newar]
    
  })

}



bulkselect=()=>{
  if(this.state.allStage){
    let newar=this.state.data.map(val=>{
      return{
        ...val,
        check:true
      }
    })
    this.setState({
      data:[...newar]
    })
  }else if(this.state.completeStage){
   this.bulkHandle()
  }else if(this.state.uncompleteStage){
   this.bulkHandle()
  }

 

}

bulkHandle=()=>{
  let newar=this.state.show.map(val=>{
    return{
      ...val,
      check:true
    }
  })
   let index=newar.reduce((acc,val)=>{
     return[...acc,val.index]
   },[])
   
  for(let i=0;i<index.length;i++){
     this.state.data[index[i]].check=true
     
  }
  
 
  this.setState({
    show:[...newar]
  })
}

delete=()=>{
if(this.state.allStage){
 let newar=this.state.data.filter(val=>{
   if(val.check !=true){
     return val
   }
 })
 
  this.setState({
    data:[...newar]
  })

}else if(this.state.completeStage){
  this.handleDelete()
  
}else if(this.state.uncompleteStage)
   
    this.handleDelete()
  
}

handleDelete=()=>{
  let newar=this.state.show.filter(val=>{
    if(val.check !=true){
      return val
    }
  })

  let newar1=this.state.data.filter(val=>{
    if(val.check !=true){
      return val
    }
  })
  this.state.data=newar1
  
  this.setState({
    show:[...newar],
    
  })
}

reset=()=>{
  this.setState({
    data:[],
    show:[]
  })
}
    render(){

       const shows=()=>{
           
           let newar= this.state.data.map(val=>{
                return(
                    <Data value={val} change={this.change} key={val.id}
                    checkHandle={this.checkHandle} 
                    />
                )
            })
            return newar
        }

        return (
          
        <div>
          <div className="container">

               <div className="row">
                <div className="col-md-6  ">
                  <Filter
                    completed={this.completed}
                    uncompleted={this.uncompleted}
                    all={this.all}
                  />

                </div>
                <div className="col-md-6">

                <Bulk
                  bulk={this.bulkselect}
                  delete={this.delete}
                  reset={this.reset}
                />
                </div>
              

               </div>

               <div className="row mt-5">
                   <div className="col-md-12">
                       {this.state.allStage?shows():""}
                       {this.state.show.map(val=>{
                return(
                    <Data value={val} change={this.change} key={val.id}
                    checkHandle={this.checkHandle} 
                    
                    />
                )
            })}
                   </div>
               </div>
          </div>

        </div>
        )
    }
}


export default Main