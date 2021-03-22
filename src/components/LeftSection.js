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
      />
      <Skills isPreviewMode={props.isPreviewMode} skills={props.skills} />
      <Languages
        isPreviewMode={props.isPreviewMode}
        laguanges={props.languages}
      />
    </section>
  );
}

/*<LeftSection
        infoSection={props.state.InfoSection}
        skills={props.state.Skills}
        languages={props.state.Languages}
      />*/

//onChange={props.handleFormChange}

/*function ProfileSectionPreview(props) {
  const profileValues = Object.entries(props.profileSection);

  return (
    <section className="profileSection">
      {profileValues.map((entry, index) => {
        return (
          <p key={`profile-form-input-${index}`} id={entry[0]}>
            {entry[1]}
          </p>
        );
      })}
    </section>
  );
}*/

export default LeftSection;
