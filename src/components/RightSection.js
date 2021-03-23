import React from "react";
import Experience from "./Experience";
import Education from "./Education";

function RightSection(props) {
  return (
    <section className="RightSection">
      <Experience
        isPreviewMode={props.isPreviewMode}
        experience={props.experience}
        handleExperienceChange={props.handleExperienceChange}
        addExperience={props.addExperience}
        deleteExperience={props.deleteExperience}
      />
      <Education
        isPreviewMode={props.isPreviewMode}
        education={props.education}
      />
    </section>
  );
}

export default RightSection;
