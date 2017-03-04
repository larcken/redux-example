import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

// Store 생성
import { createStore } from 'redux';
import reducers from './reducers';

// test 용도이기때문에 주석처리.. 지워도 되지만 히스토리 차원에서 남겨둠
//import * as actions from './actions';


// react-redux에 대해서 알아보자..
// view layer binding 도구, 마치 it 부서와 같다.
// 핵심은 두가지가 있는데 첫번째가 provider
// 컴포넌트에서 redux를 사용할 수 있도록 서비스를 제공. provider는 하나의 컴포넌트이다.
// provier로 감싸면 provider가 복잡한 작업을 해줌.
import { Provider } from 'react-redux';

const store = createStore(reducers);
// Store가 생성됨
// Store가 하는일
/*
  dispatch(action) 액션을 reducer로 보낸다. 현재 자신 상태와 전달받은 action을 전달. 새상태를 받으면 기존 상태에 갈아끼운다.
  getState() 현재 상태를 반환
  subscribe(listener) 상태가 바뀔때마다 실행할 함수를 등록, 여기에 있는 listener가 상태가 바뀔때마다 실행되는 콜백함수
  replaceReducer(nextReducer) hot reloding가 블라블라 사용되진 않으니 여기서 다루진 않음
*/

/* 테스트 용도
console.log(store.getState());
// 상태가 변할때마다 특정 함수 호출해보자.
//store.subscribe(() => console.log(store.getState()));
// 상태가 반환하는 값이 unsubscribe
const unsubscribe = store.subscribe(() => console.log(store.getState()));
// action을 보낸다.
store.dispatch(actions.increment());
store.dispatch(actions.increment());
store.dispatch(actions.decrement());
store.dispatch(actions.setColor([200, 200, 200]));

// 이 문구가 들어가면 더이상 subscribe가 발생하지 않기때문에 프린트가 더이상 찍히지 않는다.
unsubscribe();
store.dispatch(actions.setColor([210, 210, 210]));
*/

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
