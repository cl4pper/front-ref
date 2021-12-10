import React from 'react';

// STYLE
import { TitleStyle } from './component.styles';

const Title = props => {
    const { label, size } = props;

    const fontSize = () => ({
        'sm': 16,
        'default': 24,
        'lg': 32,
    }[size || 'default']);
    
    return (
        <TitleStyle fontSize={fontSize()}>{label}</TitleStyle>
    );
};

export default Title;