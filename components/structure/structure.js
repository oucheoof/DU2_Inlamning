function render_structure ()
{
  const container = document.querySelector("#wrapper");
  container.innerHTML = `
    <header></header>
    <main>
      <div id="left"></div>
      <div id="right">
        <div id="right_top"></div>
        <div id="right_bottom"></div>
      </div>
    </main>
  `;

  return {
    header: container.querySelector("header"),
    left: container.querySelector("#left"),
    right_top: container.querySelector("#right_top"),
    right_bottom: container.querySelector("#right_bottom"),
  };
}

/* Skapar en funktion kallad render_structure. 
Vi skapar en variabel vi kallar för container. 
Vi hittar vår div med id:et wrapper i vår index.html fil med hjälp av querySelector("#wrapper").
Vi vill sedan att den returnerar header left right_top, right_bottom.*/

