// 그냥 텍스트만 보여주는 컴포넌트
import React, { Component } from 'react';

class NoPropsComponentExample extends Component {
    //최적화 부분
    shouldComponentUpdate(nextProps, nextState) {
        if(this.props === nextProps) {
            return false;
        }

        if(this.state === nextState) {
            return false;
        }
        return true;
    }

    render() {
        return <div>Props를 받지 않는 일반 컴포넌트</div>;
    }
}

export default NoPropsComponentExample;