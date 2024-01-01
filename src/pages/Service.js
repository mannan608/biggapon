import React from "react";
import BreadCump from "../component/breadcump/BreadCump";
import ServiceData from "../data/ServiceData";
import ServiceDetails from "../component/services/ServiceDetails";

const Service = () => {
  return (
    <>
      <BreadCump title="Services" service="What we do" />
      <div class="services-wrapper">
        <div class="container-fluid">
          <div className="services d-flex flex-column">
            {ServiceData.map((data) => (
              <ServiceDetails key={data.id} data={data} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
