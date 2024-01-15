import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ data }) => {
  const { service, icon, shortdesc, link } = data;
  return (
    <>
      <div class="col-lg-4 col-md-6">
        <div class="card ">
          <div className="card-body">
            <img src={icon} alt={service} />
            <h3 className="mt-4">{service} </h3>
            <p className="mt-3">{shortdesc}</p>
            <div className="mt-3">
              <Link to={link}>
                <button type="button" class="btn btn-link">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
