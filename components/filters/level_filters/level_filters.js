function render_level_filters(parent) {
  const container = document.createElement("div");
  container.id = "level_filters";
  parent.appendChild(container);

  for (let level of LEVELS) {
    render_filter_element(container, level.name);
  }
}
