function Experience(props) {
  if (props.isPreviewMode === true) {
    return <ExperiencePreview experience={props.experience} />;
  } else {
    return <ExperienceInput experience={props.experience} />;
  }
}

function ExperienceInput(props) {
  //const skills = props.skills;

  return (
    <section className="ExperienceSection">
      <h5>EXPERIENCE</h5>
      <button type="button" className="experience-button">
        <i className="fas fa-plus"></i>
      </button>
    </section>
  );
}

function ExperiencePreview(props) {
  return (
    <section className="ExperienceSection">
      <h5>EXPERIENCE</h5>
      <button type="button" className="experience-button">
        <i className="fas fa-plus"></i>
      </button>
    </section>
  );
}

export default Experience;
