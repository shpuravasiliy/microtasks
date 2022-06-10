import React from 'react';

//types
export type ArrMoney = {
    arrMoney: Array<MoneyType>
    setBank: (typeBank: BankTypes) => void
}
export type MoneyType = {
    banknots: string
    value: number
    number: string
}

export type BankTypes = 'all' | 'RUBLS' | 'Dollars';

export const NewComponent: React.FC<ArrMoney> = (props) => {
    return (
        <>
            <ul>
                {props.arrMoney.map((t, index) => {
                    return (
                        <li key={index}>
                            <span> {t.banknots}</span>
                            <span> {t.value}</span>
                            <span> {t.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '100px'}}>
                <button onClick={() => props.setBank('all')}>all</button>
                <button onClick={() => props.setBank('RUBLS')}>RUBLS</button>
                <button onClick={() => props.setBank('Dollars')}>Dollars</button>
            </div>
        </>
    )
}