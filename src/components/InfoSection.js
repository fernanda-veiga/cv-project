import React from "react";

function InfoSection(props) {
  if (props.isPreviewMode === true) {
    return <InfoSectionPreview infoSection={props.infoSection} />;
  } else {
    return <InfoSectionInput infoSection={props.infoSection} />;
  }
}

//handleFormChange={props.handleFormChange}

function InfoSectionInput(props) {
  const infoValues = Object.entries(props.infoSection);
  const icons = [
    <i className="fas fa-phone"></i>,
    <i className="fas fa-envelope"></i>,
    <i className="fas fa-map-marker-alt"></i>,
    <i className="fab fa-linkedin-in"></i>,
  ];

  return (
    <section className="InfoSection">
      {infoValues.map((entry, index) => {
        return (
          <div>
            <div>{icons[index]}</div>
            <input
              key={`InfoSection-${index}`}
              id={entry[0]}
              type="text"
              value={entry[1]}
              placeholder={entry[0].charAt(0).toUpperCase() + entry[0].slice(1)}
              onChange={props.handleFormChange}
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
    <section className="InfoSection">
      {infoValues.map((entry, index) => {
        return (
          <div>
            <div>{icons[index]}</div>
            <p key={`InfoSection-${index}`} id={entry[0]}>
              {entry[1]}
            </p>
          </div>
        );
      })}
    </section>
  );
}

export default InfoSection;
