function render_city_filters (parent)
{
  const container = document.createElement("div");
  container.id = "city_filters";
  parent.append(container);
  
  for (let country of COUNTRIES) {
    const country_container = document.createElement("div");
    container.append(country_container);
    country_container.classList.add("country_container");
  
    country_container.innerHTML = `
      <h1>${country.name}</h1>
      <div class="city_container"></div>
    `;
  
    const city_container = country_container.querySelector(".city_container");
    // Använd den inbyggda filter-metoden på arrayen CITIES.
    const cities_in_country = CITIES.filter(function (city) { return city.countryID === country.id; });
    for (let city of cities_in_country) {
      render_filter_element(city_container, city.name);
    }
  }
  
}