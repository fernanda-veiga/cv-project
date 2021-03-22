import React from "react";

function InfoSection(props) {
  if (props.isPreviewMode === true) {
    return (
      <section className="InfoSection">
        <Icons />
        <InfoSectionPreview infoSection={props.infoSection} />
      </section>
    );
  } else {
    return (
      <section className="InfoSection">
        <Icons />
        <InfoSectionInput
          infoSection={props.infoSection}
          handleFormChange={props.handleFormChange}
        />
      </section>
    );
  }
}

function InfoSectionInput(props) {
  const infoValues = Object.entries(props.infoSection);

  return (
    <div className="resume-info-div">
      {infoValues.map((entry, index) => {
        return (
          <input
            key={`info-form-input-${index}`}
            id={entry[0]}
            type="text"
            value={entry[1]}
            placeholder={entry[0].charAt(0).toUpperCase() + entry[0].slice(1)}
            onChange={props.handleFormChange}
          ></input>
        );
      })}
    </div>
  );
}

function InfoSectionPreview(props) {
  const infoValues = Object.entries(props.infoSection);

  return (
    <div className="resume-info-div">
      {infoValues.map((entry, index) => {
        return (
          <p key={`info-form-input-${index}`} id={entry[0]}>
            {entry[1]}
          </p>
        );
      })}
    </div>
  );
}

function Icons() {
  return (
    <div className="resume-info-icons">
      <i className="fas fa-phone"></i>
      <i className="fas fa-envelope"></i>
      <i className="fas fa-map-marker-alt"></i>
      <i className="fab fa-linkedin-in"></i>
    </div>
  );
}

export default InfoSection;
