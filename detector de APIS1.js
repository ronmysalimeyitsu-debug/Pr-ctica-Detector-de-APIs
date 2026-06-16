// ==========================================
// LAB: Detector de APIs del Navegador
// ==========================================
// Instrucciones:
// 1. Usa una IA para que te genere código que detecte las APIs
// 2. Pega el código generado en este archivo
// 3. Presiona "Run" en el lab-viewer para ejecutar

const apiResults = {
  geolocation: false,
  localStorage: false,
  sessionStorage: false,
  indexedDB: false,
  serviceWorker: false,
  webRTC: false,
  webGL: false,
  speechRecognition: false,
  notifications: false,
  bluetooth: false
};

// ==========================================================================
// Pega tu código generado aquí (Protegido con bloques try/catch anti-bloqueo)
// ==========================================================================
try {
  apiResults.geolocation = typeof navigator.geolocation !== 'undefined';
} catch (e) { apiResults.geolocation = false; }

try {
  apiResults.localStorage = typeof window.localStorage !== 'undefined';
} catch (e) { apiResults.localStorage = false; }

try {
  apiResults.sessionStorage = typeof window.sessionStorage !== 'undefined';
} catch (e) { apiResults.sessionStorage = false; }

try {
  apiResults.indexedDB = typeof window.indexedDB !== 'undefined';
} catch (e) { apiResults.indexedDB = false; }

try {
  apiResults.serviceWorker = typeof navigator.serviceWorker !== 'undefined';
} catch (e) { apiResults.serviceWorker = false; }

try {
  apiResults.webRTC = typeof window.RTCPeerConnection !== 'undefined' || typeof window.webkitRTCPeerConnection !== 'undefined';
} catch (e) { apiRTC = false; }

try {
  apiResults.webGL = typeof window.WebGLRenderingContext !== 'undefined';
} catch (e) { apiResults.webGL = false; }

try {
  apiResults.speechRecognition = typeof window.SpeechRecognition !== 'undefined' || typeof window.webkitSpeechRecognition !== 'undefined';
} catch (e) { apiResults.speechRecognition = false; }

try {
  apiResults.notifications = typeof window.Notification !== 'undefined';
} catch (e) { apiResults.notifications = false; }

try {
  apiResults.bluetooth = typeof navigator.bluetooth !== 'undefined';
} catch (e) { apiResults.bluetooth = false; }


// ==========================================
// Código de verificación (Optimizado para el ciclo de vida del DOM)
// ==========================================
function showResults() {
  const resultsDiv = document.getElementById('results');
  
  // Control de seguridad: Si el elemento aún no existe en el DOM, aborta pacíficamente
  if (!resultsDiv) return;

  let html = '<div class="results-grid">';
  
  for (const [api, available] of Object.entries(apiResults)) {
    const status = available === true ? '✓' : '✗';
    const cls = available === true ? 'available' : 'unavailable';
    html += `<div class="result-item ${cls}"><span>${api}</span><span>${status}</span></div>`;
  }
  
  html += '</div>';
  resultsDiv.innerHTML = html;
}

// Ejecuta la función inmediatamente si el DOM ya cargó, o espera a que esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', showResults);
} else {
  showResults();
}