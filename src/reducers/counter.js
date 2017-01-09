import * as types from '../actions/ActionTypes';

const initialState = {
  number: 0,
  dummy: 'dumbdumb',
  dumbObject: {
    d: 0,
    u: 1,
    m: 2,
    b: 3
  }
};

// es6 default argument 라는 문법, 기본인수가 있음
export default function counter(state = initialState, action) {
  switch (action.type) {
    case types.INCREMENT:
        // return {number : state.number + 1};
        return {
           ...state,
           number: state.number + 1,
           dumbObject: {...state.dumbObject, u: 0}
        };
      break;
    case types.DECREMENT:
      return {
        ...state,
        number: state.number - 1
      };
      break;
    default:
      return state;
  }
}
