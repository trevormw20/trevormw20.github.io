// HOLDOUT offline cache: network first, so updates arrive; falls back to the cached game when offline.
const CACHE = 'holdout-v3';
const FILES = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './icon-maskable-512.png', './apple-touch-icon.png', './audio/music-defeat.mp3', './audio/music-fight.mp3', './audio/music-night.mp3', './audio/music-scavenge.mp3', './audio/music-title.mp3', './audio/music-victory.mp3', './audio/sfx-ammo.mp3', './audio/sfx-barricade.mp3', './audio/sfx-bite.mp3', './audio/sfx-blade.mp3', './audio/sfx-blood-moon.mp3', './audio/sfx-blunt.mp3', './audio/sfx-break.mp3', './audio/sfx-card.mp3', './audio/sfx-crossbow.mp3', './audio/sfx-dawn.mp3', './audio/sfx-eat.mp3', './audio/sfx-explosion.mp3', './audio/sfx-fight.mp3', './audio/sfx-flee.mp3', './audio/sfx-groan.mp3', './audio/sfx-heal.mp3', './audio/sfx-helicopter.mp3', './audio/sfx-horde.mp3', './audio/sfx-infected.mp3', './audio/sfx-molotov.mp3', './audio/sfx-pistol.mp3', './audio/sfx-rifle.mp3', './audio/sfx-shotgun.mp3', './audio/sfx-snarl.mp3', './audio/sfx-zombie-death.mp3'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || !e.request.url.startsWith(self.location.origin)) return;
  e.respondWith(fetch(e.request).then(r => { if (r.ok) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); } return r; })
    .catch(() => caches.match(e.request, {ignoreSearch: true}).then(r => r || caches.match('./index.html'))));
});
