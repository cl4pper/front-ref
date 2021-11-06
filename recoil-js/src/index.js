/*
USED TO RENDER MAIN APP COMPONENT
INTO HTML INDEX FILE.
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {
	RecoilRoot,
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
  } from 'recoil';

// COMPONENTS
import App from './App';

ReactDOM.render(
	<RecoilRoot>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</RecoilRoot>,
	document.getElementById('app')
);
