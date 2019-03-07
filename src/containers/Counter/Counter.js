import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.counter} />
                <CounterControl label="Aumentar" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Diminuir" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Aumentar 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Diminuir 5" clicked={this.props.onSubtractCounter}  />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        counter: state.counter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddCounter: () => dispatch({type: 'ADD', val: 5}),
        onSubtractCounter: () => dispatch({type: 'SUBTRACT', val: 5})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);