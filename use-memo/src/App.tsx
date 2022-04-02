import React, { FormEvent, useMemo, useState } from 'react';
// STYLE
import './App.scss';

const App = (): JSX.Element => {
	const [name, handleName] = useState<string>('hello');
	const [finalName, handleFinalName] = useState<string>('hello');
	const word = useMemo(() => { console.log('Hello, my dear.'); return finalName}, [finalName]);

	function setName(e: FormEvent): void {
		e.preventDefault();
		handleFinalName(name);
	};

	return (
		<div className="App">
			<form onSubmit={(e: FormEvent): void => setName(e)} id="form-name">
				<input id="name" value={name} onChange={(e: React.FormEvent<HTMLInputElement>) => handleName(e.currentTarget.value)} />
				<button type="submit">Submit</button>
			</form>
			<h1>name: {word}</h1>
		</div>
	);
};

export default App;
