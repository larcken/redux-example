// reducer 가 두개이상일 경우 합쳐줘야한다.
// 그래서 index.js 파일 추가

import {combineReducers} from 'redux';
import counter from './counter';
import ui from './ui';

const reducers = combineReducers({
  counter, ui
})

// 합친 reducer를 내보내기
export default reducers;

// todo : 리듀서를 사용해서 스토어를 만들고 스토어를 컴포넌트에 연결해야한다.


// Store 는 어플리케이션의 현재상태를 지니고 있음, 단 하나의 스토어가 있어야하며
// createStrore로 생성하여 리듀서를 인수로 전달하여 스토어를 실행하면 됨
