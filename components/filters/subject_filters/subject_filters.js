
function render_subject_filters (parent)
{

  const container = document.createElement("div"); //Skapar en ny div i vår parent som vi väljer (i index.js) (ta bort)
  container.id = "subject_filters"; //Ger id till den nya diven (ta bort)
  parent.append(container); //Lägger till den nya diven (container) till vår förälder vilket är det vi väljer i (index.js)
  
  for (let subject of SUBJECTS) 
  {
    render_filter_element(container, subject.name); 
  }

  
  // Funktionen tar emot en referens till förälderelementet.
  // Den skapar en container för alla filter-element för "subject".
  // Se language_filters.js  

  
}