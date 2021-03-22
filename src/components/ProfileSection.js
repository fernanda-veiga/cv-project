import React from "react";

function ProfileSection(props) {
  if (props.isPreviewMode === true) {
    return <ProfileSectionPreview profileSection={props.profileSection} />;
  } else {
    console.log(props.profileSection);
    return (
      <ProfileSectionInput
        profileSection={props.profileSection}
        handleProfileChange={props.handleProfileChange}
      />
    );
  }
}

function ProfileSectionInput(props) {
  let profileValues = Object.entries(props.profileSection);

  return (
    <section key="ProfileSection" className="ProfileSection">
      {profileValues.map((entry, index) => {
        console.log(entry);
        return (
          <input
            key={`ProfileSection-${index}`}
            id={entry[0]}
            type="text"
            placeholder={entry[0].charAt(0).toUpperCase() + entry[0].slice(1)}
            value={entry[1]}
            onChange={props.handleProfileChange}
          ></input>
        );
      })}
    </section>
  );
}

function ProfileSectionPreview(props) {
  const profileValues = Object.entries(props.profileSection);

  return (
    <section className="ProfileSection">
      {profileValues.map((entry, index) => {
        return (
          <p key={`ProfileSection-${index}`} id={entry[0]}>
            {entry[1]}
          </p>
        );
      })}
    </section>
  );
}

export default ProfileSection;
