import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './CustomFiles/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('SummerSaving'));
serviceWorker.unregister();
