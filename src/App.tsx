import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "./components/button";
import {MouseEvent} from "react";


function App() {

    const Button1Foo=(subscriber: string, age: number, address: string)=>{
        console.log(subscriber, age, address)
    }

    const Button2Foo=(subscriber: string)=>{
        console.log(subscriber)
    }


    const Button3Foo=()=>{
        console.log('I am stupid button')
    }
    return (

        <>

            <div className={'App'}>
              <Button name={'MyYouTubeChannel-1'} callback={()=>Button1Foo('I am Vasya', 21, 'Live in Minsk')}/>
              <Button name={'MyYouTubeChannel-2'} callback={()=>Button2Foo('I am Ivan')}/>
              <Button name={'Stupid button'} callback={Button3Foo}/>
            </div>


        </>
    );
}

// @ts-ignore
export default App;
