
function render_language_filters (parent)
{
  const container = document.createElement("div");
  container.id = "language_filters";
  parent.append(container);
  
  for (let language of LANGUAGES) {
    console.log(language); // Detta bör logga varje språkobjekt
    render_filter_element(container, language.name);
  }
  
}