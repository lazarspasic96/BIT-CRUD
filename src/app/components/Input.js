import React from 'react';



const Input = (props) => {
    return (


        <label> <input value={props.value} name={props.name} onChange={props.onChange} /> </label>


    )
}
export default Input;