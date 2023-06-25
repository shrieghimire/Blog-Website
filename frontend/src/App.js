import { Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage/homepage";
import Blog from "./components/blog/blog";
import { pageContainer } from "./preset-styles";

export default function App() {
  return (
    <div style={pageContainer}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog/:id" element={<Blog />} />

        {/* <Route path="/" component={Homepage} /> */}
        {/* <Route path="blog/:id" element={<Blog />} /> */}
      </Routes>
    </div>
  )
}