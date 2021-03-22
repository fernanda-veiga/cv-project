import React from "react";

function RightSection(props) {
  return <section className="RightSection"></section>;
}

/*function ProfileSection(props) {
  if (props.isPreviewMode === true) {
    //return <ProfileSectionPreview profileSection={props.profileSection} />;
    return;
  } else {
    console.log(props.profileSection);
    return <ProfileSectionInput profileSection={props.profileSection} />;
  }
}*/

/*handleFormChange={props.handleFormChange}*/

/*function ProfileSectionInput(props) {
  const profileValues = Object.entries(props.profileSection);

  return (
    <section className="profileSection">
      {profileValues.map((entry, index) => {
        return (
          <input
            key={`profile-form-input-${index}`}
            id={entry[0]}
            type="text"
            value={entry[1]}
            placeholder={entry[0].charAt(0).toUpperCase() + entry[0].slice(1)}
          ></input>
        );
      })}
    </section>
  );
}*/

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

export default RightSection;
