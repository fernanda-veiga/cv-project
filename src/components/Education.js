import React from "react";

function Education(props) {
  if (props.isPreviewMode === true) {
    return <EducationPreview education={props.education} />;
  } else {
    return (
      <EducationInput
        education={props.education}
        handleEducationChange={props.handleEducationChange}
        addEducation={props.addEducation}
        deleteEducation={props.deleteEducation}
      />
    );
  }
}

function EducationInput(props) {
  const newEducation = Object.entries(props.education.newEducation);

  return (
    <section className="EducationSection">
      <div className="Education-title">
        <h5>EDUCATION</h5>
      </div>
      <CurrentEducation
        currentEducation={props.education.allEducation}
        deleteEducation={props.deleteEducation}
      />
      <div className="Education-input">
        {newEducation.map((education, index) => {
          return (
            <input
              key={`EducationSection-${index}`}
              id={education[0]}
              type="text"
              placeholder={
                education[0].charAt(0).toUpperCase() + education[0].slice(1)
              }
              value={education[1]}
              onChange={props.handleEducationChange}
            ></input>
          );
        })}
        <button
          type="button"
          className="education-add"
          onClick={props.addEducation}
        >
          <i className="fas fa-plus"></i>
        </button>
      </div>
    </section>
  );
}

function EducationPreview(props) {
  const currentEducation = props.education.allEducation;

  return (
    <section className="EducationSection">
      <div className="Education-title">
        <h5>EDUCATION</h5>
      </div>
      <div className="Education-CurrentEducation">
        {currentEducation.map((education, index) => {
          const allFields = Object.entries(education);
          return (
            <div key={`education-${index}`} id={`education-${index}`}>
              {allFields.map((field, index) => {
                return (
                  <p
                    key={`${field[0]}-${index}`}
                    id={`${field[0]}-${index}`}
                    className={`Education-CurrentEducation-${field[0]}`}
                  >{`${field[1]}`}</p>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function CurrentEducation(props) {
  const currentEducation = props.currentEducation;

  if (currentEducation !== []) {
    return (
      <div className="Education-CurrentEducation">
        {currentEducation.map((education, index) => {
          const allFields = Object.entries(education);
          return (
            <div key={`education-${index}`} id={`education-${index}`}>
              {allFields.map((field, index) => {
                return (
                  <p
                    key={`${field[0]}-${index}`}
                    id={`${field[0]}-${index}`}
                    className={`Education-CurrentEducation-${field[0]}`}
                  >{`${field[1]}`}</p>
                );
              })}
              <button
                key={`education-delete-${index}`}
                id={`education-delete-${index}`}
                type="button"
                className="Education-delete"
                onClick={props.deleteEducation}
              ></button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Education;
