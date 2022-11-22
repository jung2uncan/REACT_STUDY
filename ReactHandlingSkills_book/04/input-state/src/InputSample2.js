import React, { useState } from 'react';

function InputSample2() {

    const [inputText, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    };

    const onReset = (e) => {
        setText('');
    }

    return (
        <div>
            <input onChange={onChange} value={inputText}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : {inputText}</b>
            </div>
        </div>
    )
}

export default InputSample2;