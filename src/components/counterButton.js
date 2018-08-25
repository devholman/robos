import React, {Component} from 'react';

let incrementByOne = (delta) =>  {
    return (prevState,curProps) => {
        return {...prevState, count: prevState.count + delta }
    }
}

class CounterButton extends Component {
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }


    updateCount = () => {
       return this.setState(incrementByOne(1)) 
    }

    render(){
        console.log('CounterButton');
        
        return (
            <button onClick={this.updateCount}>count: {this.state.count}</button>
        )
    }
}
export default CounterButton;