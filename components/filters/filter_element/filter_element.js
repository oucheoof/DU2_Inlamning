function render_filter_element (parent, text) // Parent är där det nya filterelementet ska läggas till, text är namnet på filteret. Ex. från language_filters (container, language.name).
{
  const container = document.createElement("div"); //Ny div skapas
  parent.append(container); //Lägger till det i vår parent från functions anorpet ex. container från language_filters. 
  container.classList.add("filter_element"); //Ger den nya diven en class filter_element

  container.innerHTML = `
    <div class="check_container">
      <div class="check_mark"></div>
    </div>
    <div class="text">${text}</div>
  `; // Skapar en div som ska gå att klicka på med texten från funktions anropet vilket är language.name i vårt fall. 

  container.addEventListener("click", function () 
  {
    container.classList.toggle("checked"); //Toggelar mellan checked och ingen check class för att ta bort och slå på CSS regler. 
    update_programme_list(); //Funktion som uppdaterar listan
  });
  //När någon klickar på container så körs koden. När man klickar på den nya diven så ändrar vi 
}

//TLDR: Skapar checkboxen för w/e filter som kallar på funktionen render_filter_element