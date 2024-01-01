import "../services/Service.css";

const ServiceDetails = ({ data }) => {
  const { service, image, description, items } = data;
  return (
    <>
      <div className="row">
        <div className="col-5">
          <img src={image} alt={service} />
        </div>
        <div className="col-7">
          <div className="service-contents">
            <div className="d-flex flex-column gap-2 ">
              <h4>{service} </h4>
              <p className="mt-2">{description}</p>
            </div>
            <div className="list-items mt-4">
              <ul className="d-flex flex-column gap-3">
                {items.map((item) => (
                  <li className="list-item">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
