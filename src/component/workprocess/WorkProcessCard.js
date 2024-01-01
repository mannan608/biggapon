import React from "react";

const WorkProcessCard = ({ item }) => {
  const { title, processstep, description } = item;
  // const [dynamicClasses, setDynamicClasses] = React.useState([
  //     "dynamicClass1", "dynamicClass2"
  // ]);
  // className={
  //     "badge " +
  //     (this.state.value ? "badge-primary " : "badge-danger ") +
  //     " m-4"
  //   }

  //   const isAudit = "audit";
  //   const isPlan = "plan";
  //   const isTesting = "testing";
  //   const isGrowth = "growth";
  return (
    <div className="col-lg-3 col-md-6">
      <div className="card">
        <div className="card-body">
          <div
            className={
              processstep === "01"
                ? "process audit"
                : processstep === "02"
                ? "process plan  "
                : processstep === "03"
                ? "process testing"
                : "process growth"
            }
          >
            <h4>{processstep}</h4>
          </div>
          <h5>{title}</h5>
          <p className="mt-4">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkProcessCard;
