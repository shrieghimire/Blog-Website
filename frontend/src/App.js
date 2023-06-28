import { Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage/homepage";
import { pageContainer } from "./preset-styles";
import Header from "./components/header/header";
import CreateBlog from "./pages/CreateBlog";
import BlogDetails from "./pages/BlogDetails";
// import Footer from "./components/footer/footer";

export default function App() {
  return (
    <>
      <div style={pageContainer}>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/blog-detail/:id" element={<BlogDetails />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </>
  );
}
