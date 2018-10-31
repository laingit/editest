import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppFW from './AppFW';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AppFW />, document.getElementById('root'));

// If you want your AppFW to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();