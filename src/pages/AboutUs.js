import BreadCump from "../component/breadcump/BreadCump";
import SectionHeader from "../component/sectionheader/SectionHeader";
import AboutImg from "../assets/images/about_img.png";
import AboutAnimation from "../assets/images/about_animation_obj.svg";
import WhyUs from "../assets/images/why_us_img.svg";
import WhyUsObj from "../assets/images/why_ani_obj.svg";
import Teams from "../component/team/Teams";
import TeamData from "../../src/data/TeamData";
import NewsLetter from "../component/newsletter/NewsLetter";

const AboutUs = () => {
  return (
    <>
      <BreadCump title="About Us" service="We do great thing together" />
      <div className="about-wrapper">
        <div className="container-fluid">
          <div className="about">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="about-img position-relative">
                  <div className="about-banner-img">
                    <img src={AboutImg} alt="AboutImg" />
                  </div>
                  <div className="about-animation-obj">
                    <img src={AboutAnimation} alt="AboutAnimation" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="about-content">
                  <SectionHeader
                    title="About Us"
                    short_desc="Our Background Story"
                    description="In the real world, every e-commerce business is unique, so we take a customized approach for every business to grow. We don't just focus on one area of your business, like SEO or PPC advertising; we take a holistic view of your entire e-commerce ecosystem."
                  />
                  <div className="list-items mt-4">
                    <ul className="d-flex flex-column gap-3">
                      <li className="list-item">Quality Service Guarenty</li>
                      <li className="list-item">ROI Based Digital Service</li>
                      <li className="list-item">24/7 Customer Support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="why-wrapper">
        <div className="container-fluid">
          <div className="why-us">
            <div className="row">
              <div className="col-7">
                <SectionHeader
                  title="Why Choose Us"
                  short_desc="Why You Should Work with Biggapon"
                  description="Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
                />
                <div className=" row">
                  <div className="col-6">
                    <div className="items">
                      <div className="d-flex flex-column gap-1">
                        <h6>Transparent communication</h6>
                        <p>
                          Explain with documentation why one strategy work and
                          the other don’t work.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="items">
                      <div className="d-flex flex-column gap-1">
                        <h6>Customize Strategy</h6>
                        <p>
                          Every e-commerce business is unique, so we take
                          customized approach to growth.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="items">
                      <div className="d-flex flex-column gap-1">
                        <h6>Expert Team</h6>
                        <p>
                          All team members have years of experience in eCommerce
                          field.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="items">
                      <div className="d-flex flex-column gap-1">
                        <h6>Knowledge Sharing</h6>
                        <p>
                          exchange information and best practices for sales and
                          revenue growth.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-5">
                <div className="why-banner-img position-relative">
                  <img src={WhyUs} alt="banner" />
                  <div class="banner-animation">
                    <img src={WhyUsObj} alt="WhyUsObj" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team-wrapper">
        <div className="container-fluid">
          <div className="team">
            <div className="row">
              {TeamData.map((team) => (
                <Teams key={team.id} team={team} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />
    </>
  );
};

export default AboutUs;
