# Goal

Want to add GPS data to a map and add photos taken along the route at the exact location they were taken.

1. Take GPS points and add them to a map.
2. 

### Tools

Route
	* [MapMyRide Route](http://www.mapmyride.com/workout/515362285) - MapMyRide app was used to track GPS coordinates on the hike.
	* [MapMyRide GPX Converter](http://www.mikepalumbo.com/MMRConverter/index.php) - MapMyRide does not allow you to export the trail data so someone built a tool that allows you to grab the hike ID and download the info as a GPX file.
	* [Esri Leaflet](https://github.com/Esri/esri-leaflet) - Leaflet plugin for ArcGIS services that will render the map. Leaflet support the GeoJSON format, so the GPX data will need to be reformatted.
	* [leaflet-omnivore](https://github.com/mapbox/leaflet-omnivore) - Omnivore formats different file types into GeoJSON whicn can then be added to Leaflet.

Photos
	* [ExifTool](http://www.sno.phy.queensu.ca/~phil/exiftool/) - Powerful tool to extract EXIF data from photo files. This was used to extract Latitude and Longitude info.