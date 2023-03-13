import React from "react";
import { Link, Route, Routes, NavLink } from "react-router-dom";
import Profile from "./Profile";
import WithRouterSample from "./WithRouterSample";

const Profiles = () => {
  return (
    <div>
      <h3>유저 목록 : </h3>
      <ul>
        <li>
          {/* <Link to="/profiles/jungeun">jungeun</Link> */}

          {/* 현재 경로와 Link 에서 사용하는 경로가 일치하는 경우 특정 스타일 혹은 클래스를 적용할 수 있는 컴포넌트 */}
          <NavLink
            to="/profiles/jungeun"
            style={{ background: "blue", color: "white" }}
          >
            jungeun
          </NavLink>
        </li>
        <li>
          {/* <Link to="/profiles/gildong">gildong</Link> */}
          <NavLink
            to="/profiles/gildong"
            style={{ background: "pink", color: "balck" }}
          >
            gildong
          </NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="/" element="유저를 선택해주세요" />
        <Route path="/:username" element={<Profile />} />
      </Routes>

      <WithRouterSample />
    </div>
  );
};

export default Profiles;
