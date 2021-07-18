import PropTypes from 'prop-types';
import React from 'react'


const Child=props=>{
    return(
        <div>
        <p>{props.a}</p>
        <p>{props.b}</p>
        <p>{props.c}</p>
    </div>  
    )
}

const Skill=props=>{
    return(
          <div>
              <Child
              a={props.a}
              b={props.b}
              c={props.c}
              />
          </div>
    )
}



export default Skill