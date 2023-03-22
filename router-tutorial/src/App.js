import { Route, Routes } from "react-router-dom";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Layout from "./Layout";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import MyPage from "./pages/MyPage";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
      </Route>
      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/mypage" element={<MyPage />} />
      {/* path="*" 이란? 해당 라우트 상단에 위치하는 라우트들의 규칙을 모두 확인하고 일치하는 라우트가 없다면 해당 라우트를 보여줌 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
