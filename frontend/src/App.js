import { Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage/homepage";
import Blog from "./components/blog/blog";
import { pageContainer } from "./preset-styles";
import Header from "./components/header/Header";
import CreateBlog from "./pages/CreateBlog";
// import Footer from "./components/footer/footer";

export default function App() {
  return (
    <>
      <div style={pageContainer}>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blogs" element={<Homepage />} />
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/blog/:id" element={<Blog />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </>
  );
}
