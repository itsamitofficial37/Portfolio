import React from "react";
import Project1 from "./Project1";
import Project2 from "./Project2";
import proimg from "../assets/food.png";
import proimg2 from "../assets/youtube.png";
function Work() {
  const projectCardStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px",
    maxWidth: "300px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };
  return (
    <div className="work-container">
      <h1 className="project-heading">PROJECTS</h1>
      <div className="project-container">
      <div className="project-card" style={projectCardStyle}>
        <img src={proimg} alt="project-img" />
        <Project1 />
      </div>
      <div className="project-card" style={projectCardStyle}>
        
        <img src={proimg2} alt="project-img2" />
        <Project2 />
      </div>
      </div>
    </div>
  );
}

export default Work;
