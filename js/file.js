
navigator.geolocation.getCurrentPosition(position => {
    console.log('Latitude:', position.coords.latitude);
    console.log('Longitude:', position.coords.longitude);
  }, error => {
    console.error('Error:', error);
});
// Chiedere permesso per inviare notifiche
Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
      new Notification('Hello, World!');
    }
});
document.addEventListener('DOMContentLoaded', (event) => {
  // Chiede il nome dell'utente quando la pagina viene caricata
  const userName = prompt('Per favore, inserisci il tuo nome:');

  // Trova l'elemento con l'id 'user-name' e imposta il suo contenuto con il nome dell'utente
  if (userName) {
      document.getElementById('user-name').innerText = userName;
  } else {
      document.getElementById('user-name').innerText = 'Ospite';
  }
});
DOMContentLoaded
