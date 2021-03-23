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
      <div className="Skills-title">
        <h5>SKILLS</h5>
      </div>
      <div className="Skills-CurrentSkills">
        <CurrentSkills
          currentSkills={props.skills.allSkills}
          deleteSkill={props.deleteSkill}
        />
      </div>
      <div className="Skills-input">
        <input
          type="text"
          placeholder={"New Skill"}
          value={props.skills.newSkill}
          onChange={props.handleSkillChange}
        ></input>
        <button type="button" className="skill-add" onClick={props.addSkill}>
          <i className="fas fa-plus"></i>
        </button>
      </div>
    </section>
  );
}

function SkillsPreview(props) {
  const currentSkills = props.skills.allSkills;

  return (
    <section className="SkillsSection">
      <div className="Skills-title">
        <h5>SKILLS</h5>
      </div>
      <div className="Skills-CurrentSkills">
        {currentSkills.map((skill, index) => {
          return (
            <div
              key={`skill-${index}`}
              id={`skill-${index}`}
              className="Skills-preview-box"
            >{`${skill}`}</div>
          );
        })}
      </div>
    </section>
  );
}

function CurrentSkills(props) {
  const currentSkills = props.currentSkills;

  if (currentSkills !== []) {
    return currentSkills.map((skill, index) => {
      return (
        <div key={`skill-${index}-div`} className="Skills-current-skill">
          <div
            key={`skill-${index}`}
            id={`skill-${index}`}
            className="Skills-edit-box"
          >{`${skill}`}</div>
          <button
            key={`skill-delete-${index}`}
            id={`skill-delete-${index}`}
            type="button"
            className="Skills-delete"
            onClick={props.deleteSkill}
          ></button>
        </div>
      );
    });
  }
}

export default Skills;
