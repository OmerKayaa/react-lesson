import React from 'react';
import ReactDOM from 'react-dom'; 
import txt from './View/Component-1'

let txt1 = {className:'txt-Intro'};
let helloworld = txt('hello world');

ReactDOM.render
(
    <React.StrictMode>
        {React.createElement('div',txt1,helloworld)}
    </React.StrictMode>,
    document.getElementById('root')
)