import React, {ChangeEvent, useState} from 'react';
import {Input} from './Input';
import {Button} from './Button';


export type FullInputPropsType = {
    addMessage: (m: string) => void
}

export const FullInput: React.FC<FullInputPropsType> = (props) => {
    const [title, setTitle] = useState<string>('');

    const onClickHandler = () => {
        props.addMessage(title);
        setTitle('');
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.ctrlKey && e.key === 'Enter') {
            props.addMessage(title);
            setTitle('');
        }
    }

    return (
        <div>
            {/*<input*/}
            {/*    type="text"*/}
            {/*    value={title}*/}
            {/*    onChange={onChangeHandler}*/}
            {/*    onKeyDown={onKeyDownHandler}*/}
            {/*/>*/}
            {/*<button onClick={onClickHandler}>+</button>*/}
            <Input
                value={title}
                setValue={setTitle}
                callBack={onClickHandler}
            />
            <Button
                callBack={onClickHandler}
                name={'+'}
            />
        </div>
    );
};