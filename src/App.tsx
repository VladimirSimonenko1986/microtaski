import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "./components/button";
import {MouseEvent} from "react";
import {NewCompon} from "./NewCompon";

export type FilterType = 'all' | 'dollar' | 'ruble'

function App() {

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const[filter, setFilter]=useState<FilterType>('all')

    let currentMoney = money;
    if (filter === 'dollar') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars')
    }
    if (filter === 'ruble') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'RUBLS')
    }
    const onClickFilterHundlerMain = (nameButton: FilterType) => {
        setFilter(nameButton)
    }


    return (
<> <NewCompon onClickFilterHundler={onClickFilterHundlerMain} currentMoney={currentMoney}/>
</>


    )

    // const Button1Foo=(subscriber: string, age: number, address: string)=>{
    //     console.log(subscriber, age, address)
    // }
    //
    // const Button2Foo=(subscriber: string)=>{
    //     console.log(subscriber)
    // }
    //
    //
    // const Button3Foo=()=>{
    //     console.log('I am stupid button')
    // }
    // return (
    //
    //     <>
    //
    //         <div className={'App'}>
    //           <Button name={'MyYouTubeChannel-1'} callback={()=>Button1Foo('I am Vasya', 21, 'Live in Minsk')}/>
    //           <Button name={'MyYouTubeChannel-2'} callback={()=>Button2Foo('I am Ivan')}/>
    //           <Button name={'Stupid button'} callback={Button3Foo}/>
    //         </div>


    //     </>
    // );
}

// @ts-ignore
export default App;
