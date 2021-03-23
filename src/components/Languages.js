import React from "react";

function Languages(props) {
  console.log("1");
  console.log(props.languages);
  if (props.isPreviewMode === true) {
    return <LanguagesPreview languages={props.languages} />;
  } else {
    return (
      <LanguagesInput
        languages={props.languages}
        handleLanguageChange={props.handleLanguageChange}
        addLanguage={props.addLanguage}
        deleteLanguage={props.deleteLanguage}
      />
    );
  }
}

function LanguagesInput(props) {
  console.log("2");
  console.log(props.languages);
  console.log(props.languages.allLanguages);
  return (
    <section className="LanguagesSection">
      <div className="Languages-title">
        <h5>LANGUAGES</h5>
      </div>
      <div className="Languages-CurrentLanguages">
        <CurrentLanguages
          currentLanguages={props.languages.allLanguages}
          deleteLanguage={props.deleteLanguage}
        />
      </div>
      <div className="Languages-input">
        <input
          type="text"
          placeholder={"New Language"}
          value={props.languages.newLanguage}
          onChange={props.handleLanguageChange}
        ></input>
        <button
          type="button"
          className="language-add"
          onClick={props.addLanguage}
        >
          <i className="fas fa-plus"></i>
        </button>
      </div>
    </section>
  );
}

function LanguagesPreview(props) {
  const currentLanguages = props.languages.allLanguages;

  return (
    <section className="LanguagesSection">
      <div className="Languages-title">
        <h5>LANGUAGES</h5>
      </div>
      <div className="Languages-CurrentLanguages">
        {currentLanguages.map((language, index) => {
          return (
            <div
              key={`language-${index}`}
              id={`language-${index}`}
              className="Languages-preview-box"
            >{`${language}`}</div>
          );
        })}
      </div>
    </section>
  );
}

function CurrentLanguages(props) {
  const currentLanguages = props.currentLanguages;
  console.log("test");
  console.log(currentLanguages);

  if (currentLanguages !== []) {
    return currentLanguages.map((language, index) => {
      return (
        <div
          key={`language-${index}-div`}
          className="Languages-current-language"
        >
          <div
            key={`language-${index}`}
            id={`language-${index}`}
            className="Languages-edit-box"
          >{`${language}`}</div>
          <button
            key={`language-delete-${index}`}
            id={`language-delete-${index}`}
            type="button"
            className="Languages-delete"
            onClick={props.deleteLanguage}
          ></button>
        </div>
      );
    });
  }
}

export default Languages;
