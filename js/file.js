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
  
  