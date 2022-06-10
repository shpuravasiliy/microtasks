import React, {useState} from 'react';
import './App.css';
import {FullInput} from './06-input/components/FullInput';
import {Messages} from './06-input/components/Messages';
import {Input} from './06-input/components/Input';
import {Button} from './06-input/components/Button';

export type MessagesType = {
    message: string
}

function App() {

    // const [money, setMoney] = useState<Array<MoneyType>>([
    //     {banknots: 'Dollars', value: 100, number: ' a1234567890'},
    //     {banknots: 'Dollars', value: 50, number: ' z1234567890'},
    //     {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
    //     {banknots: 'Dollars', value: 100, number: ' e1234567890'},
    //     {banknots: 'Dollars', value: 50, number: ' c1234567890'},
    //     {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
    //     {banknots: 'Dollars', value: 50, number: ' x1234567890'},
    //     {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    // ])
    // let currentMoney = money;
    // const setBank = (typeBank: BankTypes) => {
    //     switch (typeBank) {
    //         case 'all':
    //             currentMoney = money;
    //             break;
    //         default:
    //             currentMoney = money.filter((filteredMoney: MoneyType) => filteredMoney.banknots === typeBank);
    //             console.log(currentMoney);
    //             break;
    //     }
    // }
    //
    // const [moneyType, setMoneyType] = useState<BankTypes>('all')
    // const money: Array<MoneyType> = [
    //     {banknots: 'Dollars', value: 100, number: ' a1234567890'},
    //     {banknots: 'Dollars', value: 50, number: ' z1234567890'},
    //     {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
    //     {banknots: 'Dollars', value: 100, number: ' e1234567890'},
    //     {banknots: 'Dollars', value: 50, number: ' c1234567890'},
    //     {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
    //     {banknots: 'Dollars', value: 50, number: ' x1234567890'},
    //     {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    // ];
    // let currentMoney = money.filter((filteredMoney: MoneyType) => {
    //     if (moneyType === 'all') return true;
    //     return filteredMoney.banknots === moneyType;
    // });
    // const setBank = (typeBank: BankTypes) => {
    //     setMoneyType(typeBank);
    // }
    const [messages, setMessages] = useState<MessagesType[]>([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])
    const [title, setTitle] = useState<string>('');

    const addMessage = (m: string) => {
        let newMessages = {message: m};
        setMessages([newMessages, ...messages]);
    }
    const addMessageFromTitle = () => {
        addMessage(title);
    }
    const onClickHandler = () => {
        addMessage(title);
        setTitle('');
    }
    return (
        <div className="App">
            <div>
                <FullInput addMessage={addMessage}/>
                <Input
                    value={title}
                    setValue={setTitle}
                    callBack={addMessageFromTitle}
                />
                <Button
                    name={'+'}
                    callBack={onClickHandler}
                />
            </div>
            <ul>
                <Messages messages={messages}/>
            </ul>
        </div>
    );
}

export default App;