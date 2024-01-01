
function render_language_filters (parent)
{
  const container = document.createElement("div"); //Skapar en ny div i vår parent som vi väljer (i index.js) (ta bort)
  container.id = "language_filters"; //Ger id till den nya diven (ta bort)
  parent.append(container); //Lägger till den nya diven (container) till vår förälder vilket är det vi väljer i (index.js)
  
  for (let language of LANGUAGES) // Går i genom hela LANGUAGES databas
  {
    render_filter_element(container, language.name);
  }
  // För att förstå ovan behöver du förstå:

  /* function render_filter_element (parent, text)
{
  const container = document.createElement("div");
  parent.append(container);
  container.classList.add("filter_element");

  container.innerHTML = `
    <div class="check_container">
      <div class="check_mark"></div>
    </div>
    <div class="text">${text}</div>
  `;

  container.addEventListener("click", function () 
  {
    container.classList.toggle("checked");    
    update_programme_list();
  });
} */
}