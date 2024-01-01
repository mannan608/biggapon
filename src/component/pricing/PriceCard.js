const PriceCard = ({ data }) => {
  const { title, plan, image, description, items } = data;
  return (
    <div className="col-lg-4 col-md-12">
      <div className="card">
        <div className="card-header d-flex justify-content-end align-items-end">
          <small className="fw-500">{plan}</small>
        </div>
        <div className="card-body">
          <div className="card-title">
            <h3 className="d-flex align-items-center gap-2 mb-1">
              <img src={image} alt={title} className="w-auto h-auto" />
              <span>{title}</span>
            </h3>
            <p>{description}</p>
          </div>

          <ul className="d-flex flex-column gap-2 mt-4 mb-4">
            {items.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
        <div className="footer">
          <button type="button" className="btn btn-md btn-primary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
