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
      />
      <LeftSection
        isPreviewMode={props.state.isPreviewMode}
        infoSection={props.state.InfoSection}
        skills={props.state.Skills}
        languages={props.state.Languages}
      />
      <RightSection
        isPreviewMode={props.state.isPreviewMode}
        experience={props.state.Experience}
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
