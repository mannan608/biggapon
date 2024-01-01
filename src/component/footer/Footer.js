import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import "../footer/Footer.css";

const Footer = () => {
  return (
    <div className="footer-wraper">
      <div className="container-fluid">
        <div className="footer">
          <footer className="row row-cols-lg-4 row-cols-1 row-cols-md-2 py-5 border-top justify-content-between">
            <div className="col ">
              <div className="footer-logo mb-4">
                <Link to="/">
                  <img src={Logo} alt="Logo" />
                </Link>
              </div>

              <p>h-44/2, Dhanmondi 2/A, Dhaka-1209</p>
              <p className="my-1">E-mail : info@biggapon.com.bd</p>
              <p>Hotline : 09678-045045</p>
            </div>

            <div className="col ">
              <h5 className="mb-4">Company</h5>
              <ul className="d-flex flex-column gap-2">
                <li className="item">
                  <Link to="#" className="item-link">
                    About Us
                  </Link>
                </li>
                <li className="item">
                  <Link to="#" className="item-link">
                    Contact Us
                  </Link>
                </li>
                <li className="item ">
                  <Link to="#" className="item-link">
                    Services
                  </Link>
                </li>
                <li className="item mb-2">
                  <Link to="#" className="item-link">
                    Terms and Conditions
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col">
              <h5 className="mb-4">Support</h5>
              <ul className="d-flex flex-column gap-2">
                <li className="item ">
                  <Link to="#" className="item-link ">
                    FAQ’s
                  </Link>
                </li>
                <li className="item ">
                  <Link to="#" className="item-link ">
                    Support center
                  </Link>
                </li>
                <li className="item ">
                  <Link to="#" className="item-link ">
                    Security
                  </Link>
                </li>
                <li className="item">
                  <Link to="#" className="item-link ">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col">
              <h5 className="mb-4">Find Us</h5>
              <ul className="d-flex gap-2">
                <li className="item ">
                  <Link to="#">
                    <div className="circles facebook">
                      <svg
                        width="8"
                        height="18"
                        viewBox="0 0 8 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.80197 6.11678H5.21697V4.42278C5.20283 4.32191 5.21117 4.21916 5.24138 4.12188C5.2716 4.02461 5.32295 3.93522 5.39175 3.86011C5.46055 3.785 5.54511 3.72603 5.63937 3.68742C5.73362 3.64881 5.83525 3.63152 5.93697 3.63678H7.76398V0.836781L5.24397 0.822782C4.78493 0.786712 4.32351 0.850543 3.8915 1.00988C3.45948 1.16922 3.06713 1.42028 2.74144 1.74578C2.41574 2.07128 2.16445 2.46349 2.00486 2.89542C1.84527 3.32734 1.78117 3.78871 1.81697 4.24778V6.11678H0.198975V9.00578H1.81697V17.1808H5.21697V9.00578H7.50997L7.80197 6.11678Z"
                          fill="#9D9D9D"
                        ></path>
                      </svg>
                    </div>
                  </Link>
                </li>
                <li className="item">
                  <Link to="#">
                    <div className="circles linkendin">
                      <svg
                        width="16"
                        height="14"
                        viewBox="0 0 16 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.02515 14H1.02515V4H4.02515V14ZM15.0251 14H12.0251V8.658C12.0251 7.266 11.5251 6.573 10.5461 6.573C10.1956 6.55493 9.85001 6.66222 9.57132 6.87568C9.29263 7.08914 9.09902 7.39482 9.02515 7.738V14H6.02515C6.02515 14 6.06515 5 6.02515 4H8.39315L8.57615 6H8.63815C8.93467 5.48276 9.36427 5.05435 9.88233 4.75927C10.4004 4.46419 10.988 4.31321 11.5841 4.322C12.0471 4.2924 12.5107 4.36686 12.9411 4.5399C13.3714 4.71295 13.7576 4.98019 14.0711 5.322C14.762 6.17478 15.1031 7.25824 15.0251 8.353V14Z"
                          fill="#9D9D9D"
                        ></path>
                        <path
                          d="M2.5251 3C3.38114 3 4.0751 2.32843 4.0751 1.5C4.0751 0.671573 3.38114 0 2.5251 0C1.66906 0 0.975098 0.671573 0.975098 1.5C0.975098 2.32843 1.66906 3 2.5251 3Z"
                          fill="#9D9D9D"
                        ></path>
                      </svg>
                    </div>
                  </Link>
                </li>

                <li className="item ">
                  <Link to="">
                    <div className="circles twitter">
                      <svg
                        width="18"
                        height="14"
                        viewBox="0 0 18 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.3781 1.80407C16.7509 2.08239 16.0855 2.26476 15.4041 2.34507C16.122 1.91631 16.6595 1.24097 16.9161 0.44507C16.2413 0.845853 15.503 1.12826 14.7331 1.28007C14.2146 0.729766 13.5293 0.36555 12.7831 0.243708C12.0369 0.121867 11.2713 0.249185 10.6047 0.605985C9.93815 0.962786 9.40763 1.5292 9.09517 2.2177C8.78271 2.90619 8.70571 3.67843 8.87607 4.41507C7.50913 4.34659 6.17187 3.99141 4.9511 3.37258C3.73034 2.75376 2.65335 1.88512 1.79007 0.823069C1.35059 1.57913 1.21537 2.47412 1.41187 3.32627C1.60838 4.17842 2.12188 4.92382 2.84807 5.41107C2.30223 5.39381 1.76841 5.24638 1.29107 4.98107C1.29107 4.99507 1.29107 5.01007 1.29107 5.02507C1.29142 5.81859 1.56609 6.58759 2.06855 7.20176C2.57101 7.81594 3.27035 8.23752 4.04807 8.39507C3.75271 8.475 3.44805 8.51535 3.14207 8.51507C2.92492 8.51508 2.70827 8.49431 2.49507 8.45307C2.71468 9.13601 3.14225 9.73324 3.71798 10.1612C4.29371 10.5892 4.98881 10.8266 5.70607 10.8401C4.26564 11.967 2.43846 12.4795 0.62207 12.2661C2.09966 13.2127 3.80478 13.7441 5.55852 13.8047C7.31227 13.8653 9.04999 13.4528 10.5894 12.6104C12.1288 11.768 13.4131 10.5269 14.3076 9.01718C15.202 7.50748 15.6737 5.78486 15.6731 4.03007C15.6731 3.8814 15.6697 3.73307 15.6631 3.58507C16.3364 3.09847 16.9172 2.49529 17.3781 1.80407Z"
                          fill="#9D9D9D"
                        ></path>
                      </svg>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </footer>
        </div>

        <div className="footer-bottom">
          <p className="text-center text-muted">
            © 2020 - 2023 Biggapon. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
