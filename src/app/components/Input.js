import React from 'react';



const Input = (props) => {
    return (<input type={props.type} placeholder={props.placeholder} value={props.value} name={props.name} onChange={props.onChange} className={props.className} />



    )
}
export default Input;