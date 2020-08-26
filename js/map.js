var map = L.map('map').setView([52.48118181099158, -1.9040680039279925], 11);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

map.on('click', function(e) {        
    // L.marker(e.latlng).addTo(map);
    loc = String(e.latlng.lat) +','+ String(e.latlng.lng)
    // fetch('/api/loc?l='+loc);
    var c = document.createElement('div');
    c.innerText = loc;
    var b = document.createElement('button');
    b.innerText = '📋';
    b.className = 'btn';
    new ClipboardJS(b, {text: function(t){return loc}});
    c.appendChild(b);
    var popup = L.popup({draggable: false})
    .setLatLng(e.latlng)
    .setContent(c)
    .openOn(map);
    map.setView(e.latlng)
});

L.Control.geocoder({
    defaultMarkGeocode: false
  }).on('markgeocode', function(e) {
    e.latlng = e.geocode.center;
    // L.marker(e.latlng).addTo(map);
    loc = String(e.latlng.lat) +','+ String(e.latlng.lng)
    var c = document.createElement('div');
    c.innerText = loc;
    var b = document.createElement('button');
    b.innerText = '📋';
    b.className = 'btn';
    new ClipboardJS(b, {text: function(t){return loc}});
    c.appendChild(b);
    var popup = L.popup({draggable: false})
    .setLatLng(e.latlng)
    .setContent(c)
    .openOn(map);
    map.setView(e.latlng)
  }).addTo(map);