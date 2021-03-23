import React from "react";
import InfoSection from "./InfoSection";
import Skills from "./Skills";
import Languages from "./Languages";

function LeftSection(props) {
  return (
    <section className="LeftSection">
      <InfoSection
        isPreviewMode={props.isPreviewMode}
        infoSection={props.infoSection}
        handleInfoChange={props.handleInfoChange}
      />
      <Skills
        isPreviewMode={props.isPreviewMode}
        skills={props.skills}
        handleSkillChange={props.handleSkillChange}
        addSkill={props.addSkill}
        deleteSkill={props.deleteSkill}
      />
      <Languages
        isPreviewMode={props.isPreviewMode}
        languages={props.languages}
        handleLanguageChange={props.handleLanguageChange}
        addLanguage={props.addLanguage}
        deleteLanguage={props.deleteLanguage}
      />
    </section>
  );
}

export default LeftSection;
