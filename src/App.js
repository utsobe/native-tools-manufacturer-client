import { Route, Routes } from "react-router-dom";
import Login from "./authentication/Login";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import Navbar from "./shared/Navbar";
import bgImage from './assets/bg-image/bg-img-1.jpg';
import Reviews from "./pages/Review/Reviews";
import Register from "./authentication/Register";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Purchase from "./pages/Purchase";
import RequireAuth from "./authentication/RequireAuth";

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
          <Route path="/register" element={<Register />} />
          <Route path="/purchase/:id" element={<RequireAuth><Purchase /></RequireAuth>} />
        </Routes>
      </Navbar>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
