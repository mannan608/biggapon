import "./App.css";
import Navbar from "./component/header/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./pages/AboutUs";
import Home from "./pages/Home";
import Service from "./pages/Service";
import CaseStudy from "./pages/CaseStudy";
import Contacts from "./pages/Contacts";
import Blogs from "./pages/Blogs";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import OtpInputWithValidation from "./pages/OtpInputWithValidation";
import CreatePassword from "./pages/CreatePassword";
import Footer from "./component/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/casestudy" element={<CaseStudy />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route
          path="/otpinputwithvalidation"
          element={<OtpInputWithValidation />}
        />
        <Route path="/createpassword" element={<CreatePassword />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
