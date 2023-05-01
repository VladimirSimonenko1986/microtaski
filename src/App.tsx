import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "./components/button";
import * as fast



// @ts-ignore
function App() {

const ButtonFoo=(subscriber: string)=>{
    console.log(subscriber)
}
const Button2Foo =(subscriber: string)=>{
    console.log(subscriber)
}



    return (


        <>
            {/*<NewComponent topCars={topCars}/>*/}

            <Button name={'MyYouTubeChannel-1'} callback={()=>ButtonFoo('I am Vasya')}/>
            <Button name={'MyYouTubeChannel-2'} callback={()=>Button2Foo('I am Ivan')}/>

        </>
    );
}

// @ts-ignore
export default App;
