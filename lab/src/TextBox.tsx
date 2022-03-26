import React, {ChangeEventHandler, Dispatch, SetStateAction} from 'react';
import './App.css';


type TextBoxProps = {
    labelContent: string,
    change: any,
};

function TextBox(props: TextBoxProps) {
    const changeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
        const e = event.nativeEvent.target as HTMLInputElement;
        props.change(e.value)
    };

    return <div>
        <label>
            {props.labelContent}
            <input type='text' onChange={changeHandler} />
        </label>
    </div>;
}

export type { TextBoxProps };
export default TextBox;
