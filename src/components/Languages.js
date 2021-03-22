function Languages(props) {
  if (props.isPreviewMode === true) {
    return <languagesPreview languages={props.languages} />;
  } else {
    return <LanguagesInput languages={props.languages} />;
  }
}

function LanguagesInput(props) {
  //const skills = props.skills;

  return (
    <section className="LanguagesSection">
      <h5>LANGUAGES</h5>
      <button type="button" className="langauges-button">
        <i class="fas fa-plus"></i>
      </button>
    </section>
  );
}

function languagesPreview(props) {
  return;
}

export default Languages;
