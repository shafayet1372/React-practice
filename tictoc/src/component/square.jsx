


const square=(props)=>{

    return(
        <button className="button" onClick={props.onclick} disabled={props.dis}>{props.value}</button>
    )
}

export default square