import React from 'react';

// COMPONENTS
import { Title } from './components';
import { View } from './containers';

const App = () => {
    return (
        <View content={<Title size="lg" label="react styled-components" />} />
    );
};

export default App;