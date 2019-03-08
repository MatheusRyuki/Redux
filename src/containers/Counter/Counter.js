import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.counter} />
        <CounterControl label="Aumentar" clicked={this.props.onIncrementCounter} />
        <CounterControl label="Diminuir" clicked={this.props.onDecrementCounter} />
        <CounterControl label="Aumentar 5" clicked={this.props.onAddCounter} />
        <CounterControl label="Diminuir 5" clicked={this.props.onSubtractCounter} />
        <hr />
        <button type="button" onClick={this.props.onStoreResult}>Guardar Resultado</button>
        <ul>
          {this.props.storedResults.map(strResult => (
            <li key={strResult.id} role="button" onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
          ))}
        </ul>
      </div>
    );
  }
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  onIncrementCounter: PropTypes.number.isRequired,
  onAddCounter: PropTypes.number.isRequired,
  onDecrementCounter: PropTypes.number.isRequired,
  onSubtractCounter: PropTypes.number.isRequired,
  onStoreResult: PropTypes.number.isRequired,
  onDeleteResult: PropTypes.number.isRequired,
  storedResults: PropTypes.arrayOf(PropTypes.number).isRequired,
};

const mapStateToProps = state => ({
  counter: state.counter,
  storedResults: state.results,
});

const mapDispatchToProps = dispatch => ({
  onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
  onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
  onAddCounter: () => dispatch({ type: actionTypes.ADD, val: 5 }),
  onSubtractCounter: () => dispatch({ type: actionTypes.SUBTRACT, val: 5 }),
  onStoreResult: () => dispatch({ type: actionTypes.STORE_RESULT }),
  onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, resultId: id}),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
