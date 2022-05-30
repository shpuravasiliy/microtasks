import React from 'react';

export type StudentsType = {
    studentsArr: Array<StudentType>
}
export type StudentType = {
    id: number
    name: string
    age: number
}
export type TopCarsType = {
    topCarsArr: Array<TopCarType>
}
export type TopCarType = {
    manufacturer: string
    model: string
}

//data
// const students: Array<StudentType> = [
//     {
//         id: 1,
//         name: 'Vasiliy',
//         age: 30
//     },
//     {
//         id: 2,
//         name: 'Alex',
//         age: 20
//     },
//     {
//         id: 3,
//         name: 'John',
//         age: 25
//     }
// ]
// const topCars: Array<TopCarType> = [
//     {manufacturer:'BMW', model:'m5cs'},
//     {manufacturer:'Mercedes', model:'e63s'},
//     {manufacturer:'Audi', model:'rs6'}
// ]

export const NewComponent: React.FC<StudentsType> = (props) => {

    return (
        <ul>
            {props.studentsArr.map((t) => {
                    return (
                        <li key={t.id}>
                            <span>{t.name} age: {t.age}</span><br/>
                        </li>
                    )
                }
            )
            }
        </ul>
    )
}
export const ShowTopCars: React.FC<TopCarsType> = (props) => {
    return (
        <table>
            <tr>
                <th>Manufacturer</th>
                <th>Model</th>
            </tr>
            {props.topCarsArr.map((t, index) => {
                    return (
                        <tr key={index}>
                            <td>{t.manufacturer}</td>
                            <td>{t.model}</td>
                        </tr>
                    )
                }
            )
            }
        </table>
    )
}