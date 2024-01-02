
function render_language_filters (parent)
{
  const container = document.createElement("div"); //Skapar en ny div i vår parent som vi väljer (i index.js) (ta bort)
  container.id = "language_filters"; //Ger id till den nya diven (ta bort)
  parent.append(container); //Lägger till den nya diven (container) till vår förälder vilket är det vi väljer i (index.js)
  
  for (let language of LANGUAGES) // Går i genom hela LANGUAGES databas
  {
    render_filter_element(container, language.name); //För varje land ska en checkbox skapas
  }
  // För att förstå ovan behöver du förstå: filter_element.js

  
}