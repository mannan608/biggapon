import BreadCump from "../component/breadcump/BreadCump";
import Newsletter from "../component/newsletter/NewsLetter";

import CellIcon from "../assets/images/cell_small.svg";
import MailIcon from "../assets/images/mail_small.svg";

const Contacts = () => {
  return (
    <>
      <BreadCump title="Contact" service="Feel free to get in touch" />
      <div class="about-wrapper">
        <div class="container-fluid"></div>
      </div>
      <div class="contact-wrapper">
        <div class="container-fluid">
          <div class="contact">
            <div class="row">
              <div class="col-lg-6">
                <div class="contact-content">
                  <h3>Please get in touch.</h3>
                  <p className="w-75 mt-2">
                    Borem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.{" "}
                  </p>
                  <div className="contact-info d-flex  gap-3 flex-column mt-4">
                    <div className="d-flex align-items-center gap-3">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <img src={CellIcon} alt="Cell" />
                      </div>
                      <div className="d-flex justify-content-between flex-column gap-1">
                        <p> Call Us</p>
                        <h6>09678-045045</h6>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <img src={MailIcon} alt="Mail" />
                      </div>
                      <div className="d-flex justify-content-between flex-column gap-1">
                        <p> Mail Us</p>
                        <h6>biggapon@info.com</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <form action="">
                  <div class="form-group position-relative mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div class="form-group position-relative mb-3">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div class="form-group position-relative mb-3">
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Phone"
                    />
                  </div>
                  <div class="form-group position-relative mb-3">
                    <textarea
                      class="form-control"
                      rows="3"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <div class="form-action-btn">
                    <button className="btn btn-md btn-primary">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="map-wrapper">
        <div class="container-fluid">
          <div class="google-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d767.7918391277074!2d90.3755132346945!3d23.73831755634756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bfb25953b953%3A0x4606a8abd424a898!2sSteadfast%20Courier!5e0!3m2!1sen!2sbd!4v1679572000231!5m2!1sen!2sbd"
              height="570"
              style={{ border: "0", width: "100%", height: "570" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Newsletter />
    </>
  );
};

export default Contacts;
