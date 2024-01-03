function render_level_filters(parent) {
  const container = document.createElement("div");
  container.id = "level_filters";
  parent.appendChild(container);

  // Antag att LEVELS är en array som liknar SUBJECTS eller COUNTRIES
  // och att den innehåller objekt med minst en 'name' egenskap.
  for (let level of LEVELS) {
    render_filter_element(container, level.name);
  }
}
