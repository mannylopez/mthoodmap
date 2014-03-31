var map = L.map('map').setView([45.395577, -121.653465], 13);

L.esri.basemapLayer('Imagery').addTo(map);

omnivore.gpx('/assets/data/hike.gpx').addTo(map);

omnivore.csv('assets/data/onlyPhotoLatLong.csv').addTo(map);