import * as actionTypes from '../actions/actionsTypes';
import  {updateObject} from '../utility';

const initialState = {
  results: [],
};

const reducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updateObject(state, { counter: 0, results: state.results.concat({ id: new Date(), value: action.result }) });

    case actionTypes.DELETE_RESULT:
      const newArray = state.results.filter(result => result.id !== action.resultId);
      return updateObject(state, { results: newArray });
  }
  return state;
};

export default reducer;
