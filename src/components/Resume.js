import React from "react";
import ProfileSection from "./ProfileSection";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
//import InfoSection from "./components/InfoSection";

function Resume(props) {
  return (
    <section className="Resume">
      <ProfileSection
        isPreviewMode={props.state.isPreviewMode}
        profileSection={props.state.ProfileSection}
        handleProfileChange={props.handleProfileChange}
      />
      <LeftSection
        isPreviewMode={props.state.isPreviewMode}
        infoSection={props.state.InfoSection}
        handleInfoChange={props.handleInfoChange}
        skills={props.state.Skills}
        handleSkillChange={props.handleSkillChange}
        addSkill={props.addSkill}
        deleteSkill={props.deleteSkill}
        languages={props.state.Languages}
        handleLanguageChange={props.handleLanguageChange}
        addLanguage={props.addLanguage}
        deleteLanguage={props.deleteLanguage}
      />
      <RightSection
        isPreviewMode={props.state.isPreviewMode}
        experience={props.state.Experience}
        handleExperienceChange={props.handleExperienceChange}
        addExperience={props.addExperience}
        deleteExperience={props.deleteExperience}
        education={props.state.Education}
      />
      {/*<ProfileSection
        profileSection={props.state.profileSection}
        handleFormChange={props.handleFormChange}
        isPreviewMode={props.isPreviewMode}
      />
      <section className="LeftSection">
        <InfoSection
          infoSection={props.state.infoSection}
          handleFormChange={props.handleFormChange}
          isPreviewMode={props.isPreviewMode}
        />
      </section>*/}
    </section>
  );
}

/*<ProfileSection />
<LeftSection />
  <InfoSection />
  <Skills />
  <Languages />
<RightSection />
  <Experience />
  <Education />*/

export default Resume;
