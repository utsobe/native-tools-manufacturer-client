import { Route, Routes } from "react-router-dom";
import Login from "./authentication/Login";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import Review from "./pages/Review/Review";
import Navbar from "./shared/Navbar";

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/review" element={<Review />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
