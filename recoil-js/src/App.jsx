import React, { Fragment } from 'react';

// STYLE
import './App.scss';

// COMPONENTS
import { TextInput, TextRenderer } from '@components';

const App = () => {
	return (
		<div className="App">
			<TextInput />
			<TextRenderer />
		</div>
	)
}

export default App;
