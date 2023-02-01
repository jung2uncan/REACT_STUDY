import React from "react";
import { useSearchParams } from "react-router-dom";

const About = ({ location }) => {
  const [searchParams] = useSearchParams();
  const detail = searchParams.get("detail") === "true";
  return (
    <div>
      <h1>Introduction</h1>
      <p>
        This project is an example project to practice the basics of React
        Router.
        {detail && <p>추가적인 정보가 어쩌고..저쩌고,,, </p>}
      </p>
    </div>
  );
};
export default About;
