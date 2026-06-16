// Lab: API Detector (with Run button)

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

function detectAPIs() {
  // IA-generated detection code (inserted)
  apiResults.geolocation = typeof navigator.geolocation !== 'undefined';
  apiResults.localStorage = typeof window.localStorage !== 'undefined';
  apiResults.sessionStorage = typeof window.sessionStorage !== 'undefined';
  apiResults.indexedDB = typeof window.indexedDB !== 'undefined';
  apiResults.serviceWorker = typeof navigator.serviceWorker !== 'undefined';
  apiResults.webRTC = typeof window.RTCPeerConnection !== 'undefined' || typeof window.webkitRTCPeerConnection !== 'undefined';
  apiResults.webGL = typeof window.WebGLRenderingContext !== 'undefined';
  apiResults.speechRecognition = typeof window.SpeechRecognition !== 'undefined' || typeof window.webkitSpeechRecognition !== 'undefined';
  apiResults.notifications = typeof window.Notification !== 'undefined';
  apiResults.bluetooth = typeof navigator.bluetooth !== 'undefined';
}

function showResults() {
  const resultsDiv = document.getElementById('results');
  let html = '<div class="results-grid">';
  
  for (const [api, available] of Object.entries(apiResults)) {
    const status = available === true ? '✓' : '✗';
    const cls = available === true ? 'available' : 'unavailable';
    html += `<div class="result-item ${cls}"><span>${api}</span><span>${status}</span></div>`;
  }
  
  html += '</div>';
  resultsDiv.innerHTML = html;
}

function runDetection() {
  const btn = document.getElementById('runBtn');
  if (btn) {
    btn.disabled = true;
    btn.textContent = 'Running...';
  }

  setTimeout(() => {
    detectAPIs();
    showResults();
    if (btn) {
      btn.disabled = false;
      btn.textContent = 'Run';
    }
  }, 150);
}

document.addEventListener('DOMContentLoaded', () => {
  runDetection();
  const runBtn = document.getElementById('runBtn');
  if (runBtn) runBtn.addEventListener('click', runDetection);
  const refreshBtn = document.getElementById('refreshBtn');
  if (refreshBtn) refreshBtn.addEventListener('click', runDetection);
});
