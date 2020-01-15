// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// Styles
import './index.css';

// Components
import App from './components/App';

// Define & check root element
const root = document.getElementById('root');
if (root === null) throw Error('root element not found!');

// Render app
ReactDOM.render(<App />, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
