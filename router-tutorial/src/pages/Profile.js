import { useParams } from "react-router-dom";
import React from "react";

const data = {
  jungeun: {
    name: "jungeun",
    description: "리액트 공부중",
  },
  gildong: {
    name: "홍길동",
    description: "이리 뛰고, 저리 뛰고",
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username]; //URL 파라미터를 조회할 수 있는 Hook

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;
