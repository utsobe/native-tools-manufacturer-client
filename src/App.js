import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./shared/Navbar";

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
