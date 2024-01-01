import SectionHeader from "../sectionheader/SectionHeader";
import "../workprocess/WorkProcess.css";
import WorkProcessCard from "./WorkProcessCard";
import WorkProcessData from "../../data/WorkProcessData";

const WorkProcess = () => {
  return (
    <div class="work-wrapper">
      <div class="container-fluid">
        <div class="work-process">
          <SectionHeader
            title="Process "
            short_desc="Our Work Process"
            description="As an e-commerce agency, our work process may vary depending on
              your specific services and client needs. However, here is a
              general outline"
          />
          <div className="row">
            {WorkProcessData.map((item) => (
              <WorkProcessCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
