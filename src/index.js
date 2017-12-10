import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todo from './app/App';
import registerServiceWorker from './registerServiceWorker';

const todos = [
    {content: '吃饭', finished: false},
    {content: '睡觉', finished: false},
    {content: '打豆豆', finished: true}
]
ReactDOM.render(<Todo todos={todos} />, document.getElementById('root'));
registerServiceWorker();
