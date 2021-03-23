import React from "react";

function Experience(props) {
  if (props.isPreviewMode === true) {
    return <ExperiencePreview experience={props.experience} />;
  } else {
    return (
      <ExperienceInput
        experience={props.experience}
        handleExperienceChange={props.handleExperienceChange}
        addExperience={props.addExperience}
        deleteExperience={props.deleteExperience}
      />
    );
  }
}

function ExperienceInput(props) {
  const newExperience = Object.entries(props.experience.newExperience);

  return (
    <section className="ExperienceSection">
      <div className="Experience-title">
        <h5>EXPERIENCE</h5>
      </div>
      <CurrentExperience
        currentExperience={props.experience.allExperience}
        deleteExperience={props.deleteExperience}
      />
      <div className="Experience-input">
        {newExperience.map((experience, index) => {
          return (
            <input
              key={`ExperienceSection-${index}`}
              id={experience[0]}
              type="text"
              placeholder={
                experience[0].charAt(0).toUpperCase() + experience[0].slice(1)
              }
              value={experience[1]}
              onChange={props.handleExperienceChange}
            ></input>
          );
        })}
        <button
          type="button"
          className="experience-add"
          onClick={props.addExperience}
        >
          <i className="fas fa-plus"></i>
        </button>
      </div>
    </section>
  );
}

function ExperiencePreview(props) {
  const currentExperience = props.experience.allExperience;

  return (
    <section className="ExperienceSection">
      <div className="Experience-title">
        <h5>EXPERIENCE</h5>
      </div>
      <div className="Experience-CurrentExperience">
        {currentExperience.map((experience, index) => {
          const allFields = Object.entries(experience);
          return (
            <div key={`experience-${index}`} id={`experience-${index}`}>
              {allFields.map((field, index) => {
                return (
                  <p
                    key={`${field[0]}-${index}`}
                    id={`${field[0]}-${index}`}
                    className={`Experience-CurrentExperience-${field[0]}`}
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

function CurrentExperience(props) {
  const currentExperience = props.currentExperience;

  if (currentExperience !== []) {
    return (
      <div className="Experience-CurrentExperience">
        {currentExperience.map((experience, index) => {
          const allFields = Object.entries(experience);
          return (
            <div key={`experience-${index}`} id={`experience-${index}`}>
              {allFields.map((field, index) => {
                return (
                  <p
                    key={`${field[0]}-${index}`}
                    id={`${field[0]}-${index}`}
                    className={`Experience-CurrentExperience-${field[0]}`}
                  >{`${field[1]}`}</p>
                );
              })}
              <button
                key={`experience-delete-${index}`}
                id={`experience-delete-${index}`}
                type="button"
                className="Experience-delete"
                onClick={props.deleteExperience}
              ></button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Experience;
