import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todo from './pages/todo/todo';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';

ReactDOM.render(<Todo />, document.getElementById('root'));

serviceWorker.unregister();
