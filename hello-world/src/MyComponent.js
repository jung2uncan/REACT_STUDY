import PropTypes from "prop-types";

const MyComponent = (props) => {
  const { name, children, favoriteNumber } = props; //비구조화 할당
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다. <br />
      children 값은 {children}입니다. <br />
      {/* 컴포넌트 태그 사이의 내용을 보여주는 방법 */}
      제가 좋아하는 숫자는 {favoriteNumber}입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "무기명",
};

MyComponent.prototype = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
