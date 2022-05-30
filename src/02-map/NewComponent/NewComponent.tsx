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