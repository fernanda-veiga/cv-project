import React from "react";

function InfoSection(props) {
  if (props.isPreviewMode === true) {
    return <InfoSectionPreview infoSection={props.infoSection} />;
  } else {
    return (
      <InfoSectionInput
        infoSection={props.infoSection}
        handleInfoChange={props.handleInfoChange}
      />
    );
  }
}

function InfoSectionInput(props) {
  const infoValues = Object.entries(props.infoSection);
  const icons = [
    <i className="fas fa-phone"></i>,
    <i className="fas fa-envelope"></i>,
    <i className="fas fa-map-marker-alt"></i>,
    <i className="fab fa-linkedin-in"></i>,
  ];

  return (
    <section key="InfoSection" className="InfoSection">
      {infoValues.map((entry, index) => {
        return (
          <div key={`InfoSection-div-${index}`}>
            <div key={`InfoSection-icon-${index}`} className="icon">
              {icons[index]}
            </div>
            <input
              key={`InfoSection-input-${index}`}
              id={entry[0]}
              type="text"
              value={entry[1]}
              placeholder={entry[0].charAt(0).toUpperCase() + entry[0].slice(1)}
              onChange={props.handleInfoChange}
            ></input>
          </div>
        );
      })}
    </section>
  );
}

function InfoSectionPreview(props) {
  const infoValues = Object.entries(props.infoSection);
  const icons = [
    <i className="fas fa-phone"></i>,
    <i className="fas fa-envelope"></i>,
    <i className="fas fa-map-marker-alt"></i>,
    <i className="fab fa-linkedin-in"></i>,
  ];

  return (
    <section key="InfoSection" className="InfoSection">
      {infoValues.map((entry, index) => {
        return (
          <div key={`InfoSection-div-${index}`}>
            <div key={`InfoSection-icon-${index}`} className="icon">
              {icons[index]}
            </div>
            <p key={`InfoSection-p-${index}`} id={entry[0]}>
              {entry[1]}
            </p>
          </div>
        );
      })}
    </section>
  );
}

export default InfoSection;
