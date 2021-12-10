import React from 'react';

// STYLE
import { ViewStyle } from './container.style';

const View = props => {
    const { content } = props;
    
    return (
        <ViewStyle>
            { content }
        </ViewStyle>
    )
};

export default View;