import "../breadcump/BreadCump.css";
import Element1 from "../../assets/images/animation_obj_5.svg";
import Element2 from "../../assets/images/animation_obj_6.svg";

const BreadCump = (props) => {
  return (
    <div class="inner-page-wrapper">
      <div class="container-fluid">
        <div class="breadcump d-flex gap-1 align-items-center justify-content-center flex-column position-relative">
          <div class="anima_object_8">
            <img src={Element2} alt="Element2" />
          </div>
          <p className="title">{props.title}</p>
          <h3 className="service">{props.service}</h3>
          <div class="anima_object_7">
            <img src={Element1} alt="Element1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCump;
