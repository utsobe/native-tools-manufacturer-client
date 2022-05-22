import { Route, Routes } from "react-router-dom";
import Login from "./authentication/Login";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import Navbar from "./shared/Navbar";
import bgImage from './assets/bg-image/bg-img-1.jpg';
import Reviews from "./pages/Review/Reviews";

function App() {
  return (
    <div style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover' }}>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/review" element={<Reviews />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
