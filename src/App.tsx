import React, {MouseEvent} from 'react';
import logo from './logo.svg';
import './App.css';
import {NewComponent, topCars} from "./NewComponent";


function App() {

    // const myFirstSubscriber=(event: MouseEvent<HTMLButtonElement>)=> {
    //     console.log('Hello i am Vasya!')
    // }
    // const mySecondSubscriber=()=> {
    //     console.log('Hello i am Ivan!')
    // }

    // const onClickHandler = (name: string) => {
    //     console.log(name);
    // }

    const foo1=()=>{
        console.log(100200)
    }

    const foo2=(num: number)=>{
        console.log(num)
    }

    return (
        <>
            {/*<NewComponent topCars={topCars}/>*/}

            {/*<button onClick={(event: MouseEvent<HTMLButtonElement>)=>onClickHandler('Vasya')}>MyYouTubeChannel-1</button>*/}
            {/*<button onClick={(event: MouseEvent<HTMLButtonElement>)=>onClickHandler('Ivan')}>MyYouTubeChannel-2</button>*/}
            {/*<button onClick={()=>onClickHandler('some info')}>MyYouTubeChannel-2</button>*/}

            <button onClick={foo1}>1</button>
            <button onClick={()=>foo2(100200)}>2</button>
        </>
    );
}

export default App;
