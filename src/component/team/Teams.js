import React from "react";
import SocialMediaLink from "./SocialMediaLink";
import "../team/Teams.css";

const Teams = ({ team }) => {
  const { id, Name, designation, image, sociallink } = team;
  return (
    <>
      <div className="col-lg-4 col-md-2">
        <div className="card align-items-center justify-content-center flex-column gap-2">
          <div
            className={
              id === 1
                ? "team-img team-bg-1"
                : id === 2
                ? "team-img team-bg-2"
                : id === 3
                ? "team-img team-bg-3"
                : null
            }
          >
            <img src={image} alt={Name} />
          </div>
          <div className="card-body d-flex align-items-center justify-content-center flex-column gap-2">
            <h5>{Name}</h5>
            <p>{designation}</p>
            <SocialMediaLink sociallink={sociallink} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Teams;
