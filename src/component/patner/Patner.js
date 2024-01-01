import "../patner/Patner.css";
import Steadfast from "../../assets/images/patner/steadfast.svg";
import Steadfast1 from "../../assets/images/patner/steadfast_hovr.svg";
import Pixelax from "../../assets/images/patner/pixelax.svg";
import Pixelax1 from "../../assets/images/patner/pixelax_hovr.svg";
import Mudiman from "../../assets/images/patner/mudiman.svg";
import Mudiman1 from "../../assets/images/patner/mudiman_hovr.svg";
import Hatbazar from "../../assets/images/patner/hatbazar.svg";
import Hatbazar1 from "../../assets/images/patner/hatbazar_hovr.svg";
import Fashionable from "../../assets/images/patner/fashionable.svg";
import Fashionable1 from "../../assets/images/patner/fashionable_hovr.svg";
import { Link } from "react-router-dom";

const Patner = () => {
  return (
    <div className="patner-wrapper">
      <div className="container-fluid">
        <div className="patner d-flex align-items-center">
          <Link to="https://steadfast.com.bd/">
            <div className="patner-logo">
              <img src={Steadfast} alt="Steadfast" className="prt_logo" />
              <img
                src={Steadfast1}
                alt="Steadfast1"
                className="prt_hover_logo"
              />
            </div>
          </Link>
          <Link to="#">
            <div className="patner-logo">
              <img src={Pixelax} alt="Pixelax" className="prt_logo" />
              <img src={Pixelax1} alt="Pixelax1" className="prt_hover_logo" />
            </div>
          </Link>
          <Link to="#">
            <div className="patner-logo">
              <img src={Mudiman} alt="Mudiman" className="prt_logo" />
              <img src={Mudiman1} alt="Mudiman1" className="prt_hover_logo" />
            </div>
          </Link>
          <Link to="#">
            <div className="patner-logo">
              <img src={Hatbazar} alt="Hatbazar" className="prt_logo" />
              <img src={Hatbazar1} alt="Hatbazar1" className="prt_hover_logo" />
            </div>
          </Link>
          <Link to="#">
            <div className="patner-logo">
              <img src={Fashionable} alt="Fashionable" className="prt_logo" />
              <img
                src={Fashionable1}
                alt="Fashionable1"
                className="prt_hover_logo"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Patner;
