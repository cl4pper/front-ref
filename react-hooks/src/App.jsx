import React, { Component } from 'react';

// STYLE
import './app.scss';

// COMPONENTS
import { ListContainer } from '@containers';

class App extends Component {
	render() {
		return (
			<div className="app">
				<ListContainer />
			</div>
		);
	}
}

export default App;
