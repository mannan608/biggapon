import SectionHeader from "../sectionheader/SectionHeader";
import "../services/Service.css";
import ServiceData from "../../data/ServiceData";
import ServiceCard from "./ServiceCard";

const Service = () => {
  return (
    <div class="service-wrapper">
      <div class="container-fluid">
        <div class="service">
          <SectionHeader
            title="Services"
            short_desc="What We do"
            description=" We don't just focus on one area of your business, like SEO or PPC
        advertising; we take a holistic view of your entire e-commerce business."
          />
          <div className="row">
            {ServiceData.map((item) => (
              <ServiceCard data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
