import React from "react"
import Board from './board'
class main extends React.Component{
    
     state={
        box:[],
        change:true,
        count:0,
        step:[],
        disable:false,
         history:[],
         skills:[1,2,3,4,6]
         
     }

     winnner=(ar)=>{
  let win=[

    [ 0,3,6],
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
   
  ]
   
  for(let i=0;i<win.length;i++){
      const [a,b,c]=win[i]
     
      if(ar[a] && ar[a]==ar[b] && ar[b]==ar[c] && ar[a]==ar[c]){
          
          return ar[a]
      }
  }
  return false
     }
    onclick=(value)=>{
        
        let result=this.state.change?"x":"o"
        let newar=this.state.box.slice()
        let history;
        if(newar.length){
           history =newar.slice(0,newar.length)
        
        }else{
            history =newar.slice(0,newar.length-1)
        }
        newar[value]=result
     
        console.log(history)
        let count=this.state.count+1
       
        this.setState({
            box:newar,
            change:!this.state.change,
            count:count,
            step:[...this.state.step,count],
            history:[...this.state.history,{sqr:[...history]}]
           
        })
         

         if(this.winnner(newar)){
        alert(`winner is ${this.winnner(newar)}`)
        this.setState({
            disable:true
        })
        
         }
     

        
    }

    history=(event)=>{
  console.log(this.state.history)
   let newar=this.state.history.slice(0,event.target.id)
   
   let newstep=this.state.step.slice()
   let index=newstep.indexOf(event.target.id)
    newstep.splice(index,1)
   this.setState({
       box:[...newar[newar.length-1].sqr],
       step:[...newstep],
      
   })

    }
 

    render(){

       
        return(
           <div>
                <Board  value={this.state.box}
                    onclick={this.onclick}
                    dis={this.state.disable}
            />
            {this.state.step.map(val=>{
                return(
                    <p onClick={this.history} id={val}>step no:{val}</p>
                )
            })}
            <ul>
                {this.state.skills}
            </ul>
           </div>
            
        )
    }
}

export default main