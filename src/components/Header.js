import React, { Component } from 'react';
import CounterButton from './counterButton';

export default class Header extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        console.log('Header2');
        return (
        <div>
             <h1 className='f1'>RoboFriends</h1>
            <CounterButton/>
        </div>
        )
    }

}
