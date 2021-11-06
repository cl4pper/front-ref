import React from 'react';
import { useRecoilState } from 'recoil';

// STYLE
import './TextRenderer.scss';

// STORE
import * as STORE from '@store';

const TextRenderer = () => {
    const textState = useRecoilState(STORE.textState);
    const textValue = textState[0];

    return (
        <p className="TextRenderer">
            {textValue.length > 0
                ? textState
                : <i className="TextRenderer__noText">No text...</i>
            }
        </p>)
}

export {
    TextRenderer
}