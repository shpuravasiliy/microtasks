import React from 'react';
import './App.css';
import {NewComponent, ShowTopCars, StudentType, TopCarsType, TopCarType} from './02-map/NewComponent/NewComponent';

const students: Array<StudentType> = [
    {
        id: 1,
        name: 'Vasiliy',
        age: 30
    },
    {
        id: 2,
        name: 'Alex',
        age: 20
    },
    {
        id: 3,
        name: 'John',
        age: 25
    }
]
const topCars: Array<TopCarType> = [
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'}
]

function App() {
    return (
        <div className="App">
            {/*<NewComponent studentsArr={students}/>*/}
            <ShowTopCars topCarsArr={topCars} />
        </div>
    );
}

export default App;