//remove service worker, cache, and reload page
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.getRegistrations().then(function (registrations) {
    for (let registration of registrations) {
      registration.unregister();
    }
  });
}
caches.keys().then(function (names) {
  for (let name of names) caches.delete(name);
});
window.location.reload(true);
