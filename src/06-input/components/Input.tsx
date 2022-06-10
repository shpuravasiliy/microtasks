import React, {ChangeEvent} from 'react';

type InputPropsType = {
    value: string
    setValue: (value: string) => void
    callBack: () => void
}

export const Input: React.FC<InputPropsType> = (props) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setValue(e.currentTarget.value)
    }
    const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.ctrlKey && e.key === 'Enter') {
            props.callBack();
            props.setValue('');
        }
    }
    return (
        <>
            <input
                type="text"
                value={props.value}
                onChange={onChangeHandler}
                onKeyDown={onKeyDownHandler}
            />
        </>
    );
};
