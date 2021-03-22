import React from "react";

function Skills(props) {
  if (props.isPreviewMode === true) {
    return <SkillsPreview skills={props.skills} />;
  } else {
    return (
      <SkillsInput
        skills={props.skills}
        handleSkillChange={props.handleSkillChange}
        addSkill={props.addSkill}
        deleteSkill={props.deleteSkill}
      />
    );
  }
}

function SkillsInput(props) {
  return (
    <section className="SkillsSection">
      <h5>SKILLS</h5>
      <CurrentSkills
        currentSkills={props.skills.allSkills}
        deleteSkill={props.deleteSkill}
      />
      <input
        type="text"
        placeholder={"New Skill"}
        value={props.skills.newSkill}
        onChange={props.handleSkillChange}
      ></input>
      <button type="button" className="skill-add" onClick={props.addSkill}>
        <i className="fas fa-plus"></i>
      </button>
    </section>
  );
}

function SkillsPreview(props) {
  return (
    <section className="SkillsSection">
      <h5>SKILLS</h5>
      <button type="button" className="skills-button">
        <i className="fas fa-plus"></i>
      </button>
    </section>
  );
}

function CurrentSkills(props) {
  const currentSkills = props.currentSkills;

  if (currentSkills !== []) {
    return currentSkills.map((skill, index) => {
      return (
        <div key={`skill-${index}-div`}>
          <div key={`skill-${index}`} id={`skill-${index}`}>{`${skill}`}</div>
          <button
            key={`skill-delete-${index}`}
            id={`skill-delete-${index}`}
            type="button"
            className="skill-delete"
            onClick={props.deleteSkill}
          >
            Del
          </button>
        </div>
      );
    });
  }
}

/*function InfoSection(props) {
  return <section className="Skills"></section>;
}

//handleFormChange={props.handleFormChange}



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
}*/

export default Skills;
