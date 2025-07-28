import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ArticleDetail from "./pages/ArticleDetailPage";
import ResourceDetailpage from "./pages/ResourcesDetailPage";
import ArticlePage from "./pages/Articlepage";
import NotFound from "./pages/NotFound";
import Resource from "./pages/ResourcesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/article/:id" element={<ArticleDetail />} />
      <Route path="/articles" element={<ArticlePage />} />
      <Route path="/resources" element={<Resource />} />
      <Route path="/resource/:id" element={<ResourceDetailpage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
