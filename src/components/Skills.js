function Skills(props) {
  if (props.isPreviewMode === true) {
    return <SkillsPreview skills={props.skills} />;
  } else {
    return <SkillsInput skills={props.skills} />;
  }
}

function SkillsInput(props) {
  //const skills = props.skills;

  return (
    <section className="SkillsSection">
      <h5>SKILLS</h5>
      <button type="button" className="skills-button">
        <i class="fas fa-plus"></i>
      </button>
    </section>
  );
}

function SkillsPreview(props) {
  return;
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
