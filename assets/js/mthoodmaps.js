var map = L.map('map').setView([45.395577, -121.653465], 13);

L.esri.basemapLayer('Topographic').addTo(map);

omnivore.gpx('/assets/data/hike.gpx').addTo(map);
