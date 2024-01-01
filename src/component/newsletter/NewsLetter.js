import "../newsletter/NewsLetter.css";
import Element1 from "../../assets/images/animation_obj_3.svg";
import Element2 from "../../assets/images/animation_obj_4.svg";
const NewsLetter = () => {
  return (
    <div className="newsletter-wrapper">
      <div className="container-fluid">
        <div className="newsletter d-flex align-items-center justify-content-center flex-column position-relative h-100 gap-2">
          <div className="anima_object_5">
            <img src={Element1} alt="Element1" />
          </div>
          <h4 className="mb-2 text-white">
            Stay Updated By Subscribing Our Newsletter
          </h4>
          <p className="mb-4 text-center text-white">
            Forem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <form action="">
            <div class="input-group gap-3">
              <input
                type="text"
                class="form-control"
                placeholder="Your Email"
                aria-label="Your Email"
                aria-describedby="btnGroup"
              />
              <button class="btn btn-md btn-primary" id="btnGroup">
                Let's Talk
              </button>
            </div>
          </form>

          <div className="anima_object_6">
            <img src={Element2} alt="Element2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
