
import React from "react";


type CurrentMoneyType = Array[]

export const NewCompon = () => {
    let currentMoney;
    return (
        <>
            <ul>
                {currentMoney<CurrentMoneyType>.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span> {objFromMoneyArr.banknots}</span>
                            <span> {objFromMoneyArr.value}</span>
                            <span> {objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>


            <div style={{marginLeft: '35px'}}>
                <button onClick={() => onClickFilterHundler('all')}>all</button>
                <button onClick={() => onClickFilterHundler('ruble')}>ruble</button>
                <button onClick={() => onClickFilterHundler('dollar')}>dollar</button>
            </div>
        </>
    )
}