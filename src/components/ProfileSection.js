import React from "react";

function ProfileSection(props) {
  if (props.isPreviewMode === true) {
    //return <ProfileSectionPreview profileSection={props.profileSection} />;
    return;
  } else {
    console.log(props.profileSection);
    return <ProfileSectionInput profileSection={props.profileSection} />;
  }
}

/*handleFormChange={props.handleFormChange}*/

function ProfileSectionInput(props) {
  let profileValues = Object.entries(props.profileSection);

  return (
    <section className="ProfileSection">
      {profileValues.map((entry, index) => {
        return (
          <input
            key={`ProfileSection-${index}`}
            id={entry[0]}
            type="text"
            placeholder={entry[0].charAt(0).toUpperCase() + entry[0].slice(1)}
          ></input>
        );
      })}
    </section>
  );
}
//value={entry[1]}
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

export default ProfileSection;
