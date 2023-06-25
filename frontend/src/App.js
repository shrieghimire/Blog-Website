import { Header } from "./components/header/header";
import { pageContainer } from "./preset-styles";
import "./index.css";
import Homepage from "./components/homepage/homepage";
import Blog from "./components/blog/blog";

function App() {
  return <div style={pageContainer}>
    <Header />
    {/* <Homepage /> */}
    <Blog />
  </div>;
}

export default App;
