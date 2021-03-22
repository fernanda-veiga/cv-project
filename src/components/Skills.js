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
  const currentSkills = props.skills.allSkills;

  return (
    <section className="SkillsSection">
      <h5>SKILLS</h5>
      {currentSkills.map((skill, index) => {
        return (
          <div key={`skill-${index}`} id={`skill-${index}`}>{`${skill}`}</div>
        );
      })}
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

export default Skills;
