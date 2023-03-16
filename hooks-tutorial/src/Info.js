import React, { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    console.log("렌더링이 완료되었습니다.");
    console.log({
      name,
      nickname,
    });
  });

  useEffect(() => {
    console.log("마운트 될 때만 실행됩니다.");
  }, []);

  useEffect(() => {
    console.log("이름이 바뀔 때만 실행됩니다. >> ", name);
  }, [name]);

  //렌더링될 때마다 cleanup 함수 호출됨
  useEffect(() => {
    console.log("effect >>", name);

    //cleanup 함수
    return () => {
      console.log("cleanup >>", name);
    };
  }, [name]);

  //unmount될 때만 cleanup 함수 호출됨
  useEffect(() => {
    console.log("effectt >>", name);

    //cleanup 함수
    return () => {
      console.log("unmount >>", name);
    };
  }, []);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        &nbsp;
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름: </b> {name}
        </div>
        <div>
          <b>닉네임: </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
