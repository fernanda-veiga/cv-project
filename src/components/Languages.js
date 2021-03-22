function Languages(props) {
  if (props.isPreviewMode === true) {
    return <LanguagesPreview languages={props.languages} />;
  } else {
    return <LanguagesInput languages={props.languages} />;
  }
}

function LanguagesInput(props) {
  //const skills = props.skills;

  return (
    <section className="LanguagesSection">
      <h5>LANGUAGES</h5>
      <button type="button" className="languages-button">
        <i className="fas fa-plus"></i>
      </button>
    </section>
  );
}

function LanguagesPreview(props) {
  return (
    <section className="LanguagesSection">
      <h5>LANGUAGES</h5>
      <button type="button" className="languages-button">
        <i className="fas fa-plus"></i>
      </button>
    </section>
  );
}

export default Languages;
