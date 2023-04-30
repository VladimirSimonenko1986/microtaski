import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {NewComponent} from "./NewComponent";


function App() {

    let [students, setStudents]=useState([
        {id: 1, name: 'James', age:  51},
        {id: 2, name: 'Bob', age:  76},
        {id: 3, name: 'Robert', age:  12},
        {id: 4, name: 'David', age:  24},
        {id: 5, name: 'Mike', age:  43},
        {id: 6, name: 'Eva', age:  24},
        {id: 7, name: 'Billy', age:  56},
        {id: 8, name: 'Kris', age:  34},
        {id: 1, name: 'James', age:  51},
        {id: 2, name: 'Bob', age:  76},
        {id: 3, name: 'Robert', age:  12},
        {id: 4, name: 'David', age:  24},
        {id: 5, name: 'Mike', age:  43},
        {id: 6, name: 'Eva', age:  24},
        {id: 7, name: 'Billy', age:  56},
        {id: 8, name: 'Kris', age:  34},

               ]);


    return (
        <>
           <NewComponent students={students}/>
        </>
    );
}

export default App;
