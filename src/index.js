import React from 'react';
import ReactDOM from 'react-dom'; 
import Counter from './View/Component-1'

let txt = (s) => React.createElement('h1',{className:'container'},s);
let txt1 = {className:'txt-Intro'};
let helloworld = txt('hello world');

ReactDOM.render
(
    <React.StrictMode>
        {React.createElement('div',txt1,helloworld)}
        <Counter />
    </React.StrictMode>,
    document.getElementById('root')
)