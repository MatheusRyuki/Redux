import * as actionTypes from '../actions/actions';

const initialState = {
  results: [],
};

const reducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.result }),
        counter: 0,
      };
    case actionTypes.DELETE_RESULT:
      const newArray = state.results.filter(result => result.id !== action.resultId);
      return {
        ...state,
        results: newArray
      };
  }
  return state;
};

export default reducer;
