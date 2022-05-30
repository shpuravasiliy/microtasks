import {Button} from './components/button/Button';
import React from 'react';

export const Buttons = () => {
    const onClickHandler = (name: string) => {
        console.log(name);
    }

    const button1Foo = (subscriber: string, age: number) => {
        console.log(subscriber + ' age: ' + age);
    }
    const button2Foo = (subscriber: string, age: number) => {
        console.log(subscriber + ' age: ' + age);
    }
    const button3Foo = () => {
        console.log('Im stupid button');
    }
    return (
        <div>
            <Button
                name={'MyYouTubeChanel-1'}
                callBack={() => button1Foo('Im Vasya', 21)}
            />
            <Button
                name={'MyYouTubeChanel-2'}
                callBack={() => button2Foo('Im Ivan', 23)}
            />
            {/*<button>MyYouTubeChanel-1</button>*/
            }
            {/*<button>MyYouTubeChanel-2</button>*/
            }
            <Button
                name={'Im button'}
                callBack={button3Foo}
            />
        </div>
    )
}