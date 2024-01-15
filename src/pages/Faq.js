import React from "react";
import BreadCump from "../component/breadcump/BreadCump";

const Faq = () => {
  return (
    <>
      <BreadCump title="Faq" service="What you know about us" />
      <div class="faq-wrapper">
        <div class="container-fluid">
          <div class="faq ">
            <div class="section_header d-flex flex-column justify-content-center align-items-center mb-4">
              <h4 class="text-center">Frequently asked Questions </h4>
            </div>
            <div class="question-list d-flex flex-column gap-5">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h1 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseone"
                      aria-expanded="false"
                      aria-controls="collapseone"
                    >
                      Why SteadFast Courier?
                    </button>
                  </h1>
                  <div
                    id="collapseone"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <p>
                        SteadFast Courier stands out for its commitment to
                        delivering parcels nationwide on time and without any
                        hassle. We pride ourselves on offering fast payment,
                        easy tracking, a dedicated customer service team, and
                        ensuring the safe delivery of your parcels.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h1 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      What is the coverage area of steadfast Courier?
                    </button>
                  </h1>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <p>
                        SteadFast Courier extends its services across 8
                        divisions, 495 Upazilas, and 330 Municipal Corporations.
                        Click here for a comprehensive list of detailed service
                        locations.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h1 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      What services does Steadfast Courier provide?
                    </button>
                  </h1>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <p>
                        Revel in the excellence of E-commerce delivery,
                        pick-and-drop , cutting-edge warehousing, entrust your
                        goods to our state-of-the-art warehousing, and witness
                        perfection in packaging solutions.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h1 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Want to know about your delivery charges ?
                    </button>
                  </h1>
                  <div
                    id="collapseFour"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <p>
                        Discover our delivery charges, which are determined by
                        the weight of a 1 kg parcel:
                      </p>
                      <br />
                      <ul class="d-flex flex-column gap-1">
                        <li>
                          <p>Inside Dhaka: 70 </p>
                        </li>
                        <li>
                          <p>Dhaka Suburban: 100</p>
                        </li>
                        <li>
                          <p>Outside Dhaka: 130</p>
                        </li>
                      </ul>
                      <br />
                      <p>
                        For a more detailed breakdown, utilize our Price
                        Calculation Option by{" "}
                        <a href="pricing.html" class="txt-primary">
                          Click here
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
