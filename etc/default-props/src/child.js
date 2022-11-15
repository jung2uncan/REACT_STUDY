//컴포넌트의 깊이가 깊어져서 props를 child component로 내리는 행위를 여러 번 하게 되면, 개발자의 실수로 props를 넣지 못하는 일이 발생하기도 함.
// 보통 렌더링 하는 함수에 예외 처리를 하는데 아래 코드는 그 예이다.
import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Child extends Component {
    //prop를 받지 못해도 props의 기본 값을 세팅해주어 에러가 나지 않도록 하기 위함.
    // static defaultProps = {
    //     testArray: []
    // }

    render() {
        const renderTestArray = arrayProps => {
            return arrayProps.map((unit, idx) => {
                return (
                    <div key={idx}>
                        {unit}
                    </div>
                )
            })
        }

        return (
            <div>
                {renderTestArray(this.props.testArray)}
            </div>
        );
    }
}

Child.propTypes = {
    testArray: PropTypes.arrayOf(
        PropTypes.string
    ).isRequired,
}
Child.defaultProps = {
    testArray: []
}

export default Child;