import React from "react";


type ButtonPropsType = {
    name: string
    callback: () => void
}



export const Button = (props: ButtonPropsType) => {

    const onClickHundler = () => {
        props.callback()
    }

    return (
        <button onClick={onClickHundler}>{props.name}</button>

    )
}