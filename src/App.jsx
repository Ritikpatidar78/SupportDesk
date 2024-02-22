import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import NewTicket from "./screens/NewTicket";
import Login from "./screens/Login";
import Register from "./screens/Register";
import AllTickets from "./screens/AllTickets";
import SingleTicket from "./screens/SingleTicket";
import Pagenotfound from "./screens/Pagenotfound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="*" element={<Pagenotfound />} />
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<NewTicket />} />
          <Route path="/all-ticket" element={<AllTickets />} />
          <Route path="/ticket/:id" element={<SingleTicket />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
};

export default App;
