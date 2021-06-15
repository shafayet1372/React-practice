import Square from './square'

const board=(props)=>{
 const onclick=(i)=>{
   
    return(
        <Square value={props.value[i]}
        onclick={()=>{
            props.onclick(i)
        }}
        dis={props.dis}
        />
    )

 }
return(
  <div>
      {onclick(0)}
      {onclick(1)}
      {onclick(2)}
      <br />
      {onclick(3)}
      {onclick(4)}
      {onclick(5)}
      <br />
      {onclick(6)}
      {onclick(7)}
      {onclick(8)}

  </div>
)

}

export default board