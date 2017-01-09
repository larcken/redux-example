// Action Type에 정의해놓은 것을 불러오기 위해선 여기에 정의를 해줘야한다.
//import {INCREMENT} from './ActionTypes'
import * as types from './ActionTypes'

//액션 생성자를 만들자, 카멜 케이스로...
// 다른곳에서 불러올 수 있도록 export, 그리고 함수이다.
export function increment(){
  return {
    type : types.INCREMENT
  }
}

export function decrement(){
  return {
    type : types.DECREMENT
  }
}

export function setColor(color){
  return {
    type : types.SET_COLOR,
    color
  };
}

// 만약에 액션이 많으면 파일을 나눠서 분리해서 개발하는것이 좋다.
