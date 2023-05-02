
import React from "react";
import {FilterType} from "./App";


type NewComponentProps = {
    currentMoney : Array<Currency>,
    onClickFilterHundler: (filter: FilterType) => void
}

type Currency = {
    banknots: string,
    value: number,
    number: string
}

export const NewCompon : React.FC<NewComponentProps> = ({
            currentMoney,
            onClickFilterHundler
                          }) => {
    return (
        <>
            <ul>
                {currentMoney.map((objFromMoneyArr, index) => {
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