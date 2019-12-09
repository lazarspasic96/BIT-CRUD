import React from 'react';


const Button= (props)=>{

    return (

        <button  type="button"  obClickButton={onClickButton}>{props.text} </button>  
         )
}
export default Button;