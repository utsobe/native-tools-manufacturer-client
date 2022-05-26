import { Route, Routes } from "react-router-dom";
import Login from "./authentication/Login";
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
import MyOrders from "./pages/Dashboard/MyOrders";
import AddReview from "./pages/Dashboard/AddReview";
import MyProfile from "./pages/Dashboard/MyProfile";
import Payment from "./pages/Dashboard/Payment";
import ManageAllOrders from "./pages/Dashboard/ManageAllOrders";
import AddProduct from "./pages/Dashboard/AddProduct";
import MakeAdmin from "./pages/Dashboard/MakeAdmin";
import ManageProducts from "./pages/Dashboard/ManageProducts";
import RequireAdmin from "./authentication/RequireAdmin";
import NotFound from "./pages/NotFound";
import MyPortfolio from "./pages/MyPortfolio";

function App() {
  return (
    <div style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover' }}>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}>
            <Route index element={<MyProfile />} />
            <Route path="my-order" element={<MyOrders />} />
            <Route path="payment/:id" element={<Payment />} />
            <Route path="review" element={<AddReview />} />
            <Route path="manage-order" element={<RequireAdmin><ManageAllOrders /></RequireAdmin>} />
            <Route path="add-product" element={<RequireAdmin><AddProduct /></RequireAdmin>} />
            <Route path="make-admin" element={<RequireAdmin><MakeAdmin /></RequireAdmin>} />
            <Route path="manage-product" element={<RequireAdmin><ManageProducts /></RequireAdmin>} />
            <Route />
          </Route>
          <Route path="/review" element={<Reviews />} />
          <Route path="/portfolio" element={<MyPortfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/purchase/:id" element={<RequireAuth><Purchase /></RequireAuth>} />
          <Route path="*" element={<NotFound />} />
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
