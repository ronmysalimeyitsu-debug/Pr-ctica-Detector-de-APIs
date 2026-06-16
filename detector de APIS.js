document.addEventListener('DOMContentLoaded', () => {
  const placeholder = document.getElementById('placeholder');
  const resultsGrid = document.getElementById('results-grid');

  // Definición de las características que inspeccionaremos en el objeto global window
  const storageAPIs = [
    { name: 'localStorage', check: () => 'localStorage' in window && window.localStorage !== null },
    { name: 'sessionStorage', check: () => 'sessionStorage' in window && window.sessionStorage !== null },
    { name: 'indexedDB', check: () => 'indexedDB' in window },
    { name: 'cookieStore', check: () => 'cookieStore' in window }
  ];

  // Simulación de retraso de carga mínima para apreciar el estado inicial
  setTimeout(() => {
    placeholder.style.display = 'none';
    resultsGrid.style.display = 'grid';

    storageAPIs.forEach(api => {
      let isAvailable = false;
      
      try {
        isAvailable = api.check();
      } catch (error) {
        isAvailable = false; // Captura bloqueos de seguridad del navegador
      }

      // Definición de clases basadas en las reglas de tu CSS
      const statusClass = isAvailable ? 'available' : 'unavailable';
      const statusText = isAvailable ? 'Disponible' : 'No disponible';

      // Creación e inyección del nodo al DOM
      const resultItem = document.createElement('div');
      resultItem.className = `result-item ${statusClass}`;
      resultItem.innerHTML = `
        <span>${api.name}</span>
        <span>${statusText}</span>
      `;

      resultsGrid.appendChild(resultItem);
    });
  }, 600);
});