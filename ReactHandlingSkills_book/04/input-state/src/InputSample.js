import React, { useState, useRef } from 'react';

function InputSample() {
    //객체 형태의 상태를 관리해야 함.
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });

    //초기화 버튼을 클릭했을 때 이름 input 에 포커스가 잡히도록 'useRef'를 사용하여 기능 구형
    const nameInput = useRef();

    const { name, nickname } = inputs; //비구조화 할당을 통해 값 추출

    const onChange = (e) => {
        const {value, name} = e.target; //우선 e.target에서 name과 value를 추출

        setInputs({
            ...inputs, //기존의 input 객체를 복사한 뒤 (이렇게 복사하지 않으면 inputs 값 자체(형태)가 대체되므로, 형태 유지를 위해 spread 복사 필수!)
            [name]: value //name 키를 가진 값을 value로 설정 (이는 name값이 name이 들어올 수도 있고, nickname이 들어올 수도 있음)
        });
    };

    const onReset = (e) => {
        setInputs({
            name: '',
            nickname: '',
        });
        nameInput.current.focus();  //Ref 객체의 .current 값은 우리가 원하는 DOM 을 가르키게 됨.
    };

    return (
        <div>
            <input name="name" placeholder='이름' onChange={onChange} value={name} ref={nameInput}/>
            <input name="nickname" placeholder='닉네임' onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : </b>
                {name} ({nickname})
            </div>
        </div>
    )
}

export default InputSample;