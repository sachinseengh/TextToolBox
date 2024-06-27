import React from 'react'

export default function Alert(props){
    return(

 props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show mx-5 my-3  `} role="alert">
<strong >{props.alert.message}</strong>

</div>
    )
}