import "../hero/Hero.css";
import { Link } from "react-router-dom";
import QuatationImg from "../../assets/images/quatation_bg_img.svg";
import From from "../form/QuatationFrom";

const Hero = () => {
  return (
    <div className="intro-wrapper">
      <div className="container-fluid">
        <div className=" hero d-flex gap-3">
          <div className="hero-content w-50">
            <h1 className="font-56 fw-400 ">
              <strong className="fw-700 me-3">Grow</strong>Your
              <strong className="fw-700 ms-3 position-relative ">
                E-commerce
              </strong>
              <br />
              Business
              <strong className="fw-700 ms-3">Sales</strong> and <br />
              <strong className="fw-700 position-relative d-flex align-items-center gap-4">
                Revenue
              </strong>
            </h1>
            <p className="mt-4">
              Maximize Your small medium E-commerce business Conversion Rate
              with Our Data-Driven Growth Strategies and Insights.
            </p>
            <Link
              to="/contacts"
              className="btn btn-md btn-primary px-4 mt-4 d-flex align-items-center justify-content-center "
            >
              Yes I Want to Grow
            </Link>
          </div>
          <div className="quatation-form d-flex justify-content-center w-50 position-relative ">
            <div className="quate">
              <h4 className="mb-4 fw-600 text-center">Request a Quote</h4>
              <From />
            </div>

            <div className="qoute-bg">
              <img src={QuatationImg} alt="quate-bg" className="w-auto" />
            </div>
            <div className="ellipseFade1"></div>
          </div>
          <div className="ellipseFade2"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
