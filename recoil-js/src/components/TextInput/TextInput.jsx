import React from 'react';
import { useRecoilState } from 'recoil';

// STYLE
import './TextInput.scss';

// STORE
import * as STORE from '@store';

const TextInput = () => {
    const [text, setText] = useRecoilState(STORE.textState);

    const onChange = (event) => {
        setText(event.target.value);
    }

    return (
        <input
            className="TextInput"
            type="text"
            value={text}
            onChange={onChange}
        />
    )
}

export {
    TextInput
}