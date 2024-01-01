import "../sectionheader/SectionHeader.css";

const SectionHeader = (props) => {
  return (
    <div className="section-header d-flex align-items-center justify-content-center flex-column gap-1">
      <small className="title text-primary fw-500">{props.title}</small>
      <h3 className="short_desc">{props.short_desc}</h3>
      <p className="description text-center">{props.description}</p>
    </div>
  );
};

export default SectionHeader;
