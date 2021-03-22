import React from "react";

function InfoSection(props) {
  if (props.isPreviewMode === true) {
    return (
      <section className="resume-info">
        <Icons />
        <InfoSectionPreview infoSection={props.infoSection} />
      </section>
    );
  } else {
    return (
      <section className="resume-info">
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
    <div className="resume-info">
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
    <div className="resume-info">
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
      <i class="fas fa-phone"></i>
      <i class="fas fa-envelope"></i>
      <i class="fas fa-map-marker-alt"></i>
      <i class="fab fa-linkedin-in"></i>
      <i class="fab fa-github"></i>
    </div>
  );
}

export default InfoSection;
