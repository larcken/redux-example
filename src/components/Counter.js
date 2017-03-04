import React, { Component } from 'react';

import Value from './Value';
import Control from './Control';
// import {connect, bindActionCreators} from 'react-redux'
import {connect} from 'react-redux'

import * as actions from '../actions';



class Counter extends Component {
    constructor(props) {
        super(props);
        this.setRandomColor = this.setRandomColor.bind(this);
    }

    setRandomColor() {
      const color = [
        Math.floor((Math.random()*55) + 200),
        Math.floor((Math.random()*55) + 200),
        Math.floor((Math.random()*55) + 200)
      ];
      this.props.handleSetColor(color);
    }


    // 이런식으로 했어야 했지만
    // <Value number={this.props.store.getState().counter.number} />
    // 이렇게 하면 됨.
    render() {
        const color = this.props.color;
        // es6 에는 template literal이라는것이 있어 String 안에 상수나 변수를 넣을 수 있다.
        const style = {
          background: `rgb(${color[0]},${color[1]},${color[2]})`
        };


        return(
          <div style={style}>
            <Value number={this.props.number} />
            <Control
                  onPlus={this.props.handleIncrement}
                  onSubtract={this.props.handleDecrement}
                  onRandomizeColor={this.setRandomColor}
             />
          </div>
        );
    }
}

// react state내에 있는 함수를 이 컴포넌트로 맵핑
// 그냥 파라미터 이름이 state
const mapStateToProps = (state) => {
  return {
    number: state.counter.number,
    color: state.ui.color
  }
}

const mapDispatchToProps = (dispatch) => {
  // 단점은...이름이 actionCreators로 사용됨
  // return bindActionCreators(actions, dispatch);
  return {
    handleIncrement: () => {dispatch(actions.increment())},
    handleDecrement: () => {dispatch(actions.decrement())},
    handleSetColor: (color) => {dispatch(actions.setColor(color))}
  };
}

// connect가 또다른 함수를 반환하고 파라미터로 Counter를 넣어줌
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
