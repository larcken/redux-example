import * as types from '../actions/ActionTypes';

// 초기상태를 상수형태로 작성
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

// es6 default argument 라는 문법 즉 기본인수라는 문법이 있음. state가 undefined일땐 initialState를 사용
export default function counter(state = initialState, action) {
    switch (action.type) {
        case types.INCREMENT:
            // return {number : state.number + 1};
            // ...state 라고 하면 state의 값이 복사됨.
            return {
                ...state,
                number: state.number + 1,
                dumbObject: {...state.dumbObject,
                    u: 0
                }
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
