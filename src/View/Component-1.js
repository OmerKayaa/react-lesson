import React, {useState} from 'react';

const Counter = () =>
{
    const [getState,setState] = useState(0);

    const increase = (num) =>
    {
        setState(getState + num);
    }

    return (
        <div class="container">
            <p>Counter :</p><label>{getState}</label>
            <div>
                <button onClick={() =>increase(+1)} > Increase </button>
                <button onClick={() =>increase(-1)} > Decrease </button>
            </div>
        </div>
    );
}

/*class Counter extends React.Component
{
    state = 
    {
        i: 0
    }

    inc = () =>
    {
        this.setState({i: this.state.i+1})
    }

    dec = () =>
    {
        this.setState({i: this.state.i-1})
    }

    render()
    {
        
        var incButton = React.createElement('button',{onClick:this.inc},'increase');
        var decButton = React.createElement('button',{onClick:this.dec},'decrease');
        var container = React.createElement('div',{className:'container'}, incButton, decButton);
        var label = React.createElement('label',{}, this.state.i);
        return React.createElement('div',{className:'container'},'Counter : ', label , container);
        
        /*
        return (
            <div class="container">
                <p>
                    Counter :
                </p>
                <label>
                    {this.state.i}
                </label>
                <div>
                    <button onClick={this.inc} > Increase </button>
                    <button onClick={this.dec} > Decrease </button>
                </div>
            </div>
       );
    }
}*/

export default Counter;