function Education(props) {
  if (props.isPreviewMode === true) {
    return <EducationPreview education={props.education} />;
  } else {
    return <EducationInput education={props.education} />;
  }
}

function EducationInput(props) {
  //const skills = props.skills;

  return (
    <section className="EducationSection">
      <h5>EDUACTION</h5>
      <button type="button" className="education-button">
        <i className="fas fa-plus"></i>
      </button>
    </section>
  );
}

function EducationPreview(props) {
  return (
    <section className="EducationSection">
      <h5>EDUACTION</h5>
      <button type="button" className="education-button">
        <i className="fas fa-plus"></i>
      </button>
    </section>
  );
}

export default Education;
