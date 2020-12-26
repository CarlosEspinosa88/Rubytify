import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import Albums from './components/Albums';
import Songs from './components/Songs';

import * as serviceWorker from './serviceWorker';
import { GlobalStyle } from './styles/GlobalStyle'


const routing = (
	<Router>
		<GlobalStyle />
		<div>
			<Route exact path="/" component={App} />
			<Route exact path="/:artistId/albums" component={Albums} />
			<Route exact path="/albums/:albumsId/songs" component={Songs} />
		</div>
	</Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
