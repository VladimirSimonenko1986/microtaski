import React from "react";



type ButtonType={
    name: string
    callback:()=>void
}

export const Button=(props: ButtonType)=> {
    const onClickHundler =()=>{
       props.callback()
    }

    return(
        <button onClick={onClickHundler}>{props.name}</button>

    )
}