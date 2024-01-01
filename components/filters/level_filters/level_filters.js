function render_level_filters(parentElement) {
  // Skapa en container för level-filtren och tilldela ID 'level_filters'
  const container = document.createElement('div');
  container.id = 'level_filters'; // Använd 'id' istället för 'className' eftersom det är ett unikt ID i CSS

  // ... skapa och lägg till dina filter-element här
  const levels = ['Bachelor', 'Master', 'PhD']; // Dina filternivåer

  levels.forEach(level => {
    const filterButton = document.createElement('button');
    filterButton.textContent = level;
    filterButton.className = 'filter-button'; // Tilldela en klass för styling
    // Eventuella event handlers här
    container.appendChild(filterButton);
  });

  // Lägg till containern i förälderelementet
  parentElement.appendChild(container);
}
