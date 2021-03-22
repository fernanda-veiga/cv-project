import React from "react";

function ProfileSection(props) {
  console.log(props.isPreviewMode);
  if (props.isPreviewMode === true) {
    console.log("preview");
    return <ProfileSectionPreview profileSection={props.profileSection} />;
  } else {
    console.log("input");
    return (
      <ProfileSectionInput
        profileSection={props.profileSection}
        handleFormChange={props.handleFormChange}
      />
    );
  }
}

function ProfileSectionInput(props) {
  const profileValues = Object.entries(props.profileSection);

  return (
    <section className="resume-profile">
      {profileValues.map((entry, index) => {
        return (
          <input
            key={`profile-form-input-${index}`}
            id={entry[0]}
            type="text"
            value={entry[1]}
            placeholder={entry[0].charAt(0).toUpperCase() + entry[0].slice(1)}
            onChange={props.handleFormChange}
          ></input>
        );
      })}
    </section>
  );
}

function ProfileSectionPreview(props) {
  const profileValues = Object.entries(props.profileSection);

  return (
    <section className="resume-profile">
      {profileValues.map((entry, index) => {
        return (
          <p key={`profile-form-input-${index}`} id={entry[0]}>
            {entry[1]}
          </p>
        );
      })}
    </section>
  );
}

export default ProfileSection;
