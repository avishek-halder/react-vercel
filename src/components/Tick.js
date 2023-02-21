import React, { Component, setState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Tick extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date()
        };

    }
    static contextType = ThemeContext;

    tick = () => {
        this.setState({
            date: new Date()
        })
    }
    componentDidMount(prevProps, prevState, snapshot) {

        this.timerId = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        const { bgcolor,alertTest } = this.context;
        return (
            <div>
                <h1 >{this.state.date.toLocaleTimeString()}</h1>
                <h2>BackGround Color : {bgcolor}</h2>
                <button onClick={alertTest}>Alert</button>
            </div>
        )

    }
}
export default Tick; 