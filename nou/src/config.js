/**
 * OSM Cat config
 */


var imgSrc = 'src/img/';

var config = {
	initialConfig: {
		lon: 1.59647,
		lat: 41.69689,
		rotation: 0, //in radians (positive rotation clockwise, 0 means North)
		zoom: 8,
		zoomGeolocation: 17,
		units: 'metric'
	},
	i18n: {
		layersLabel: 'Layers',
		editWith: 'Edit with:',
		openWith: 'Open with:',
		checkTools: 'Validation:',
		copyDialog: 'S\'ha copiat l\'enllaç al porta-retalls.Enlace copiado. Link has been copied',
		nodeLabel: 'Node:',
		noNodesFound: 'No nodes found.',
		wayLabel: 'Way:'
	},
	overpassApi: function(){
		// https://overpass-turbo.eu/
		var proxyOverpassApi = false;
		var overpassApi = 'https://overpass-api.de/api/interpreter';
		if (proxyOverpassApi)
		{
			overpassApi = 'https://mijndev.openstreetmap.nl/~ligfietser/fiets/api/interpreter/';
		}
		return overpassApi;
	},
	// Base layers
	layers: [
		new ol.layer.Tile({
			title: 'OpenStreetMap',
			iconSrc: imgSrc + 'osm_logo-layer.svg',
			source: new ol.source.OSM()
		}),
		new ol.layer.Tile({
			title: 'OpenStreetMap B&W',
			iconSrc: imgSrc + 'osmbw_logo-layer.png',
			source: new ol.source.XYZ({
				attributions: '&copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a>',
				//url: 'https://toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png'
				url: 'https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({// OpenStreetMap France https://openstreetmap.fr
			title: 'OpenStreetMap France',
			iconSrc: imgSrc + 'osmfr_logo-layer.png',
			source: new ol.source.OSM({
				attributions: '&copy; <a href="https://www.openstreetmap.fr/" target="_blank">OpenStreetMap France</a>',
				url: 'https://{a-c}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'OpenMapSurfer',
			iconSrc: imgSrc + 'openroute_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>, powered by <a href="https://mapsurfernet.com/" target="_blank">MapSurfer.NET</a>',
				url: 'https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'OpenCycleMap',
			iconSrc: imgSrc + 'opencycle_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a>, powered by &copy; <a href="http://www.thunderforest.com/" target="_blank">Thunderforest</a>',
				url: 'https://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=a5dd6a2f1c934394bce6b0fb077203eb'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'Topotresc',
			iconSrc: imgSrc + 'topotresc_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data <a href="https://www.topotresc.com/" target="_blank">TopoTresk</a> by <a href="https://github.com/aresta/topotresc" target="_blank">aresta</a>',
				url: 'https://api.topotresc.com/tiles/{z}/{x}/{y}'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'ArcGIS World Topo',
			iconSrc: imgSrc + 'worldtopomap_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, &copy; <a href="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer" target="_blank">ArcGIS</a>',
				url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'Positron (CartoDB)',
			iconSrc: imgSrc + 'cartodb_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, &copy; <a href="https://cartodb.com/attributions" target="_blank">CartoDB</a>',
				url: 'https://s.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'Dark Matter (CartoDB)',
			iconSrc: imgSrc + 'cartodb_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, &copy; <a href="https://cartodb.com/attributions" target="_blank">CartoDB</a>',
				url: 'https://s.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'Esri Sat',
			iconSrc: imgSrc + 'esri_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
				url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'ES_IGN - PNOA - Actual',
			iconSrc: imgSrc + 'logo_ign.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; IGN &mdash; Source: IGN',
				url: 'http://www.ign.es/wms-inspire/pnoa-ma?',
				params: {'LAYERS': 'PNOA'}
			}),
			visible: false
		}),
		
				new ol.layer.Tile({
			title: 'ES_CAT_ICGC - Actual',
			iconSrc: imgSrc + 'logo_icgc.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; ICGC &mdash; Source: ICGC',
				url: 'https://geoserveis.icgc.cat/icc_mapesbase/wms/service?',
				params: {'LAYERS': 'orto25c', 'VERSION': '1.1.1'}
			}),
			visible: false

		}),

		new ol.layer.Tile({
			title: 'Google Maps',
			iconSrc: imgSrc + 'gmaps_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,&copy; <a href="https://www.google.com/maps/" target="_blank">Google Maps</a>',
				url: 'https://mt{0-3}.google.com/vt/lyrs=m&z={z}&x={x}&y={y}'
			}),
			visible: false
		}),
		new ol.layer.Tile({// Google Sat
			title: 'Google Sat',
			iconSrc: imgSrc + 'gmaps_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,&copy; <a href="https://www.google.com/maps/" target="_blank">Google Maps</a>',
				url: 'https://mt{0-3}.google.com/vt/lyrs=s&z={z}&x={x}&y={y}'
			}),
			visible: false
		})
	],
	/**
	* @type Array
	* Overlay
	* group: string nom del grup
	* title: string titol de la capa
	* query: string consulta tal como https://overpass-turbo.eu
	* iconSrc: string ruta de la imatge
	* style: function see https://openlayers.org/en/latest/apidoc/module-ol_style_Style-Style.html
	*/
	overlays: [



		
				
		
		{
			group: 'Wheelchair',
			title: 'Wheelchair=limited',
			query: '(node[wheelchair=limited][shop]({{bbox}});node[wheelchair=limited][amenity]({{bbox}});node[wheelchair=limited][office]({{bbox}}););out meta;',
			iconSrc: imgSrc + 'accessibilitat/wheelchair_limited_shop.svg',
			iconStyle: 'background-color:#714601',
			scale: 0.0004,
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: imgSrc + 'accessibilitat/wheelchair_limited_shop.svg'
					})
				});
				return style;
			}
		},
		{
			group: 'Wheelchair',
			title: 'Wheelchair=no',
			query: '(node[wheelchair=no][shop]({{bbox}});node[wheelchair=no][amenity]({{bbox}});node[wheelchair=no][office]({{bbox}}););out meta;',
			iconSrc: imgSrc + 'accessibilitat/wheelchair_no_shop.svg',
			iconStyle: 'background-color:#714601',
			scale: 0.0004,
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: imgSrc + 'accessibilitat/wheelchair_no_shop.svg'
					})
				});
				return style;
			}
		},
		{
			group: 'Wheelchair',
			title: 'Falta Wheelchair',
			query: '(node[!wheelchair][shop]({{bbox}});node[!wheelchair][amenity]({{bbox}});node[!wheelchair][office]({{bbox}}););out meta;',
			iconSrc: imgSrc + 'accessibilitat/wheelchair_unknown.svg',
			iconStyle: 'background-color:#714601',
			scale: 0.25,
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: imgSrc + 'accessibilitat/wheelchair_unknown.svg'
					})
				});
				return style;
			}
		},
		{
			group: 'Voreres',
			title: 'Vorera adaptada',
			query: '(way[wheelchair=yes][highway=footway][footway=sidewalk]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#40E0D0',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#40E0D0',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Voreres',
			title: 'Vorera amb limitacions',
			query: '(way[wheelchair=limited][highway=footway][footway=sidewalk]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#FFA500',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,165,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#FFA500',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Voreres',
			title: 'Vorera no adaptada',
			query: '(way[wheelchair=no][highway=footway][footway=sidewalk]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#FF0000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#FF0000',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Voreres',
			title: 'Vorera sense informació',
			query: '(way[!wheelchair][highway=footway][footway=sidewalk]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#000000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.2)'
				});
				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Encreuaments',
			title: 'Encreuament adaptat',
			query: '(way[wheelchair=yes][highway=footway][footway=crossing]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#40E0D0',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#40E0D0',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Encreuaments',
			title: 'Encreuament limitat',
			query: '(way[wheelchair=limited][highway=footway][footway=crossing]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#FFA500',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,165,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#FFA500',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Encreuaments',
			title: 'Encreuament no adaptat',
			query: '(way[wheelchair=no][highway=footway][footway=crossing]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#FF0000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#FF0000',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
				{
			group: 'Encreuaments',
			title: 'Wheelchair=yes',
			query: '(node[wheelchair=yes][highway=crossing]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'accessibilitat/wheelchair_yes_shop.svg',
			iconStyle: 'background-color:#714601',
						scale: 0.25,
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: imgSrc + 'accessibilitat/wheelchair_yes_shop.svg'
					})
				});
				return style;
			}
		},
		{
			group: 'Encreuaments',
			title: 'Wheelchair=limited',
			query: '(node[wheelchair=limited][highway=crossing]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'accessibilitat/wheelchair_limited_shop.svg',
			iconStyle: 'background-color:#714601',
			scale: 0.0004,
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: imgSrc + 'accessibilitat/wheelchair_limited_shop.svg'
					})
				});
				return style;
			}
		},
		{
			group: 'Encreuaments',
			title: 'Wheelchair=no',
			query: '(node[wheelchair=no][highway=crossing]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'accessibilitat/wheelchair_no_shop.svg',
			iconStyle: 'background-color:#714601',
			scale: 0.0004,
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: imgSrc + 'accessibilitat/wheelchair_no_shop.svg'
					})
				});
				return style;
			}
		},
		{
			group: 'Encreuaments',
			title: 'Falta Wheelchair',
			query: '(node[!wheelchair][highway=crossing]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'accessibilitat/wheelchair_unknown.svg',
			iconStyle: 'background-color:#714601',
			scale: 0.25,
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: imgSrc + 'accessibilitat/wheelchair_unknown.svg'
					})
				});
				return style;
			}
		},
		{
			group: 'Vies',
			title: 'Via adaptada',
			query: '(way[wheelchair=yes][highway]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#40E0D0',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#40E0D0',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Vies',
			title: 'Via amb limitacions',
			query: '(way[wheelchair=limited][highway]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#FFA500',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,165,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#FFA500',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Vies',
			title: 'Via no adaptada',
			query: '(way[wheelchair=no][highway]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#FF0000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#FF0000',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Vies',
			title: 'Via sense informació',
			query: '(way[!wheelchair][highway]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#000000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.2)'
				});
				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},

		{
			group: 'Àrees',
			title: 'Àrea adaptada',
			query: '(way[wheelchair=yes][highway=pedestrian][area=yes]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/dots.png',
			iconStyle: 'background-color:#40E0D0',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#40E0D0',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Àrees',
			title: 'Àrea amb limitacions',
			query: '(way[wheelchair=limited][highway=pedestrian][area=yes]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/dots.png',
			iconStyle: 'background-color:#FFA500',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,165,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#FFA500',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Àrees',
			title: 'Àrea no adaptada',
			query: '(way[wheelchair=no][highway=pedestrian][area=yes]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/dots.png',
			iconStyle: 'background-color:#FF0000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#FF0000',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Àrees',
			title: 'Àrea sense informació',
			query: '(way[!wheelchair][highway=pedestrian][area=yes]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/dots.png',
			iconStyle: 'background-color:#000000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.2)'
				});
				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Altres',
			title: 'Plaça aparcament',
			query: '(node["capacity:disabled"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'accessibilitat/capacity_disabled.svg',
			iconStyle: 'background-color:#714601',
			scale: 0.0004,
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: imgSrc + 'accessibilitat/capacity_disabled.svg'
					})
				});
				return style;
			}
		},
				{
			group: 'Altres',
			title: 'Escales',
			query: '(way[highway=steps]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/dots.png',
			iconStyle: 'background-color:#FF0000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#FF0000',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Altres',
			title: 'Obstacles',
			query: '(node["obstacle:wheelchair"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'accessibilitat/obstacle_wheelchair_yes.svg',
			iconStyle: 'background-color:#714601',
			scale: 0.0004,
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: imgSrc + 'accessibilitat/obstacle_wheelchair_yes.svg'
					})
				});
				return style;
			}
		},
		{
			group: 'Vorades',
			title: 'Elevades',
			query: '(node[kerb=raised]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'accessibilitat/kerb_raised.svg',
			iconStyle: 'background-color:#714601',
			scale: 0.0004,
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: imgSrc + 'accessibilitat/kerb_raised.svg'
					})
				});
				return style;
			}
		},
		{
			group: 'Vorades',
			title: 'Rebaixades',
			query: '(node[kerb=lowered]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'accessibilitat/kerb_lowered.svg',
			iconStyle: 'background-color:#714601',
			scale: 0.0004,
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: imgSrc + 'accessibilitat/kerb_lowered.svg'
					})
				});
				return style;
			}
		},
		{
			group: 'Vorades',
			title: 'Anivellades',
			query: '(node[kerb=flush]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'accessibilitat/kerb_flush.svg',
			iconStyle: 'background-color:#714601',
			scale: 0.0004,
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: imgSrc + 'accessibilitat/kerb_flush.svg'
					})
				});
				return style;
			}
		},
		{
			group: 'Vorades',
			title: 'Falta informació',
			query: '(node[kerb=yes]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'accessibilitat/kerb_yes.svg',
			iconStyle: 'background-color:#714601',
			scale: 0.0004,
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: imgSrc + 'accessibilitat/kerb_yes.svg'
					})
				});
				return style;
			}
		},

		

		
				// Right Ticket
		{
			group: 'Parking_Lanes',
			title: 'Right Ticket',
			query: '(way["parking:lane:right"="parallel"]["parking:condition:right"="ticket"]({{bbox}});node(w);way["parking:lane:right"="diagonal"]["parking:condition:right"="ticket"]({{bbox}});node(w);way["parking:lane:right"="perpendicular"]["parking:condition:right"="ticket"]({{bbox}});node(w););out skel;',
			iconSrc: imgSrc + 'base/lineline.png',
			iconStyle: 'background-color:#0000FF',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#0000FF',
					width: 3 ,
					lineDash: [10, 10]
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
},
		{
			group: 'Mobilitat',
			title: 'Vies amb "maxspeed"',
			query: '(way[highway=motorway][maxspeed]({{bbox}});node(w);way[highway=trunk][maxspeed]({{bbox}});node(w);way[highway=primary][maxspeed]({{bbox}});node(w);way[highway=secondary][maxspeed]({{bbox}});node(w);way[highway=tertiary][maxspeed]({{bbox}});node(w);way[highway=unclassified][maxspeed]({{bbox}});node(w);way[highway=track][maxspeed]({{bbox}});node(w);way[highway=residential][maxspeed]({{bbox}});node(w);way[highway=service][maxspeed]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed.svg',
			style: function (feature) {
				var maxspeed = feature.get('maxspeed') || '';
				if (maxspeed === ''){
					return undefined;
				}
				var styles = [];

				/* draw the segment line */ 
				var width = (parseFloat(maxspeed) / 30) + 0.5;
				var color = linearColorInterpolation([0, 255, 0], [255, 0, 0], Math.min(maxspeed, 120) / 120);

				var stroke = new ol.style.Stroke({
					color: 'rgb(' + color.join() + ')',
					width: width
				});
				styles.push(new ol.style.Style({
					stroke: stroke
				}));

				// doesn't show speed sign in roundabout and similars
				if (!feature.get('junction')) {
					/* show the speed sign */ 
					var coords = feature.getGeometry().getCoordinates();

					styles.push(new ol.style.Style({
						geometry: new ol.geom.Point(new ol.geom.LineString(coords).getCoordinateAt(0.5)), // show the image in the middle of the segment
						image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.04
						}),
						text: new ol.style.Text({
							text: maxspeed
						})
					}));
				}

				return styles;
			}
		},
		
				// Left Ticket
		{
			group: 'Parking_Lanes',
			title: 'Left Ticket',
			query: '(way["parking:lane:left"="parallel"]["parking:condition:left"="ticket"]({{bbox}});node(w);way["parking:lane:left"="diagonal"]["parking:condition:left"="ticket"]({{bbox}});node(w);way["parking:lane:left"="perpendicular"]["parking:condition:left"="ticket"]({{bbox}});node(w););out skel;',
			iconSrc: imgSrc + 'base/dots.png',
			iconStyle: 'background-color:#0000FF',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#0000FF',
					width: 3 ,
					lineDash: [.1, 5]
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		
				// Both Ticket
		{
			group: 'Parking_Lanes',
			title: 'Both Ticket',
			query: '(way["parking:lane:both"="parallel"]["parking:condition:both"="ticket"]({{bbox}});node(w);way["parking:lane:both"="diagonal"]["parking:condition:both"="ticket"]({{bbox}});node(w);way["parking:lane:both"="perpendicular"]["parking:condition:both"="ticket"]({{bbox}});node(w););out skel;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#0000FF',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#0000FF',
					width: 3 
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},

		// Right No parking
		{
			group: 'Parking_Lanes',
			title: 'Right No parking',
			query: '(way["parking:lane:right"="no_parking"]({{bbox}});node(w);way["parking:lane:right"="no_stopping"]({{bbox}});node(w););out skel;',
			iconSrc: imgSrc + 'base/lineline.png',
			iconStyle: 'background-color:#ff0000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#ff0000',
					width: 3 ,
					lineDash: [10, 10]
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		
				// Left No parking
		{
			group: 'Parking_Lanes',
			title: 'Left No parking',
			query: '(way["parking:lane:left"="no_parking"]({{bbox}});node(w);way["parking:lane:left"="no_stopping"]({{bbox}});node(w););out skel;',
			iconSrc: imgSrc + 'base/dots.png',
			iconStyle: 'background-color:#ff0000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#ff0000',
					width: 3 ,
					lineDash: [.1, 5]
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		
				// Both No parking
		{
			group: 'Parking_Lanes',
			title: 'Both No parking',
			query: '(way["parking:lane:both"="no_parking"]({{bbox}});node(w);way["parking:lane:both"="no_stopping"]({{bbox}});node(w););out skel;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#ff0000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#ff0000',
					width: 3 
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},


		// Right Free
		{
			group: 'Parking_Lanes',
			title: 'Right Free',
			query: '(way["parking:lane:right"="parallel"]["parking:condition:right"="free"]({{bbox}});node(w);way["parking:lane:right"="diagonal"]["parking:condition:right"="free"]({{bbox}});node(w);way["parking:lane:right"="perpendicular"]["parking:condition:right"="free"]({{bbox}});node(w););out skel;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#c9c9c9',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#c9c9c9',
					width: 3 ,
					lineDash: [10, 10]
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},



		// Right Residents
		{
			group: 'Parking_Lanes',
			title: 'Right Residents Green Zone',
			query: '(way["parking:lane:right"="parallel"]["parking:condition:right:residents"="free"]({{bbox}});node(w);way["parking:lane:right"="diagonal"]["parking:condition:right:residents"="free"]({{bbox}});node(w);way["parking:lane:right"="perpendicular"]["parking:condition:right:residents"="free"]({{bbox}});node(w););out skel;',
			iconSrc: imgSrc + 'base/lineline.png',
			iconStyle: 'background-color:#00FF00',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#00FF00',
					width: 3 ,
					lineDash: [10, 10]
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},

		// Right Residents Exclusive
		{
			group: 'Parking_Lanes',
			title: 'Right Residents Green Exclusive Zone',
			query: '(way["parking:lane:right"="parallel"]["parking:condition:right"="residents"]({{bbox}});node(w);way["parking:lane:right"="diagonal"]["parking:condition:right"="residents"]({{bbox}});node(w);way["parking:lane:right"="perpendicular"]["parking:condition:right"="residents"]({{bbox}});node(w););out skel;',
			iconSrc: imgSrc + 'base/lineline.png',
			iconStyle: 'background-color:#145a32',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#145a32',
					width: 3 ,
					lineDash: [10, 10]
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},



		// Left Free
		{
			group: 'Parking_Lanes',
			title: 'Left Free',
			query: '(way["parking:lane:left"="parallel"]["parking:condition:left"="free"]({{bbox}});node(w);way["parking:lane:left"="diagonal"]["parking:condition:left"="free"]({{bbox}});node(w);way["parking:lane:left"="perpendicular"]["parking:condition:left"="free"]({{bbox}});node(w););out skel;',
			iconSrc: imgSrc + 'base/dots.png',
			iconStyle: 'background-color:#c9c9c9',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#c9c9c9',
					width: 3 ,
					lineDash: [.1, 5]
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},



		// Left Residents
		{
			group: 'Parking_Lanes',
			title: 'Left Residents Green Zone',
			query: '(way["parking:lane:left"="parallel"]["parking:condition:left:residents"="free"]({{bbox}});node(w);way["parking:lane:left"="diagonal"]["parking:condition:left:residents"="free"]({{bbox}});node(w);way["parking:lane:left"="perpendicular"]["parking:condition:left:residents"="free"]({{bbox}});node(w););out skel;',
			iconSrc: imgSrc + 'base/dots.png',
			iconStyle: 'background-color:#00FF00',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#00FF00',
					width: 3 ,
					lineDash: [.1, 5]
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},

		// Left Residents Exclusive
		{
			group: 'Parking_Lanes',
			title: 'Left Residents Green Exclusive Zone',
			query: '(way["parking:lane:left"="parallel"]["parking:condition:left"="residents"]({{bbox}});node(w);way["parking:lane:left"="diagonal"]["parking:condition:left"="residents"]({{bbox}});node(w);way["parking:lane:left"="perpendicular"]["parking:condition:left"="residents"]({{bbox}});node(w););out skel;',
			iconSrc: imgSrc + 'base/dots.png',
			iconStyle: 'background-color:#145a32',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#145a32',
					width: 3 ,
					lineDash: [.1, 5]
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},



		// Both Free
		{
			group: 'Parking_Lanes',
			title: 'Both Free',
			query: '(way["parking:lane:both"="parallel"]["parking:condition:both"="free"]({{bbox}});node(w);way["parking:lane:both"="diagonal"]["parking:condition:both"="free"]({{bbox}});node(w);way["parking:lane:both"="perpendicular"]["parking:condition:both"="free"]({{bbox}});node(w););out skel;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#c9c9c9',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#c9c9c9',
					width: 3 
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},



		// Both Residents
		{
			group: 'Parking_Lanes',
			title: 'Both Residents Green Zone',
			query: '(way["parking:lane:both"="parallel"]["parking:condition:both:residents"="free"]({{bbox}});node(w);way["parking:lane:both"="diagonal"]["parking:condition:both:residents"="free"]({{bbox}});node(w);way["parking:lane:both"="perpendicular"]["parking:condition:both:residents"="free"]({{bbox}});node(w););out skel;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#00FF00',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#00FF00',
					width: 3
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},

		// Both Residents Exclusive
		{
			group: 'Parking_Lanes',
			title: 'Both Residents Green Exclusive Zone',
			query: '(way["parking:lane:both"="parallel"]["parking:condition:both"="residents"]({{bbox}});node(w);way["parking:lane:both"="diagonal"]["parking:condition:both"="residents"]({{bbox}});node(w);way["parking:lane:both"="perpendicular"]["parking:condition:both"="residents"]({{bbox}});node(w););out skel;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#145a32',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#145a32',
					width: 3 
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
				},

		// Both Residents Exclusive
		{
			group: 'Parking_Lanes',
			title: 'Customers',
			query: '(way["parking:condition:left"="customers"]({{bbox}});node(w);way["parking:condition:right"="customers"]({{bbox}});node(w);way["parking:condition:both"="customers"]({{bbox}});node(w););out skel;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#01F6F2',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(1,246,242,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#01F6F2',
					width: 3 
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},

		// Motorcycle parking
		{
			group: 'Parking_Lanes',
			title: 'Motorcycle parking',
			query: '(node["amenity"="motorcycle_parking"]({{bbox}});node(w);way["amenity"="motorcycle_parking"]({{bbox}});node(w);relation["amenity"="motorcycle_parking"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#9D06FB',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(157,6,251,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#9D06FB',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},

		// Parking with fee
		{
			group: 'Parking_Lanes',
			title: 'Parking with fee',
			query: '(node["amenity"="parking"][fee=yes]({{bbox}});node(w);way["amenity"="parking"][fee=yes]({{bbox}});node(w);relation["amenity"="parking"][fee=yes]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#154360',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(21,67,96,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#154360',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},

		// Motorcycle parking
		{
			group: 'Parking_Lanes',
			title: 'Delivery',
			query: '(node["capacity:delivery"]({{bbox}});node(w);way["capacity:delivery"]({{bbox}});node(w);relation["capacity:delivery"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#FBEA00',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(251,155,2,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#FBEA00',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},

		// Charging Station
		{
			group: 'Parking_Lanes',
			title: 'Charging Station',
			query: '(node["amenity"="charging_station"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/symbols/amenity/charging_station.svg',
			style: function (feature) {
				var src = imgSrc + 'icones/symbols/amenity/charging_station.svg';
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: src
					})
				});
				return style;
			}
		},

		// Entrance garage
		{
			group: 'Parking_Lanes',
			title: 'Entrance garage',
			query: '(node["entrance"="garage"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/ES_R308e.png',
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						scale: 0.4,
						src: imgSrc + 'icones/ES_R308e.png'
					})
				});
				return style;
			}
		},
		
		// capacity:disabled
		{
			group: 'Parking_Lanes',
			title: 'Disabled parking space',
			query: '(node["capacity:disabled"]({{bbox}});node(w);way["capacity:disabled"]({{bbox}});node(w);relation["capacity:disabled"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#00FF00',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,255,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#00FF00',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 }, 


		// Parking left lane
		{
			group: 'Mobilitat',
			title: 'Left Parallel',
			query: '(way["parking:lane:left"="parallel"]({{bbox}});node(w);way["parking:lane:left"="diagonal"]({{bbox}});node(w);way["parking:lane:left"="perpendicular"]({{bbox}});node(w););out skel;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#3cff33',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#3cff33',
					width: 3 ,
					lineDash: [.1, 5]
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
			
					},
	
	{
			group: 'Coronavirus',
			title: 'Hospital i CAPs',
			query: 'node[amenity=hospital]({{bbox}});out;node[amenity=clinic]({{bbox}});out meta;',
			iconSrc: imgSrc + 'icones/symbols/amenity/hospital.svg',
			style: function (feature) {
				var src = imgSrc + 'icones/symbols/amenity/hospital.svg';
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: src
					})
				});
				return style;
			}
		},
		
				// Mobilitat (Exprés.cat)
		{
			group: 'Mobilitat',
			title: 'Right No Stopping',
			query: '(way["parking:lane:right"="no_stopping"]({{bbox}});node(w););out skel;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#ff0000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#ff0000',
					width: 3 ,
					lineDash: [10, 10]
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		
				// Overlay: Coronavirus
		{
			group: 'Coronavirus',
			title: 'Establiments oberts',
			query: 'node["opening_hours:covid19"]({{bbox}});out meta;',
			iconSrc: imgSrc + 'coronavirus.svg',
			style: function (feature) {
				var src = '';
				if (feature.get('amenity')) {
					src = imgSrc + 'icones/symbols/amenity/' + feature.get('amenity') + '.svg';
				} else if (feature.get('shop')){
					src = imgSrc + 'icones/symbols/shop/' + feature.get('shop') + '.svg';
				}
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: src
					})
				});
				return style;
			}
		},
		
		{
			group: 'Coronavirus',
			title: 'Supermercat',
			query: 'node[shop=supermarket]({{bbox}});out meta;',
			iconSrc: imgSrc + 'icones/symbols/shop/supermarket.svg',
			style: function (feature) {
				var src = '';
				if (feature.get('amenity')) {
					src = imgSrc + 'icones/symbols/amenity/' + feature.get('amenity') + '.svg';
				} else if (feature.get('shop')){
					src = imgSrc + 'icones/symbols/shop/' + feature.get('shop') + '.svg';
				}
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: src
					})
				});
				return style;
			}
		},
		{
			group: 'Coronavirus',
			title: 'Farmacies',
			query: 'node[amenity=pharmacy]({{bbox}});out meta;',
			iconSrc: imgSrc + 'icones/symbols/amenity/pharmacy.svg',
			style: function (feature) {
				var src = '';
				if (feature.get('amenity')) {
					src = imgSrc + 'icones/symbols/amenity/' + feature.get('amenity') + '.svg';
				} else if (feature.get('shop')){
					src = imgSrc + 'icones/symbols/shop/' + feature.get('shop') + '.svg';
				}
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: src
					})
				});
				return style;
			}
		},
		{
			group: 'Coronavirus',
			title: 'Hospital i CAPs',
			query: 'node[amenity=hospital]({{bbox}});out;node[amenity=clinic]({{bbox}});out meta;',
			iconSrc: imgSrc + 'icones/symbols/amenity/hospital.svg',
			style: function (feature) {
				var src = imgSrc + 'icones/symbols/amenity/hospital.svg';
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: src
					})
				});
				return style;
			}
		},
		{
			group: 'Coronavirus',
			title: 'Gasolineres',
			query: 'node[amenity=fuel]({{bbox}});out meta;',
			iconSrc: imgSrc + 'icones/symbols/amenity/fuel.svg',
			style: function (feature) {
				var src = '';
				if (feature.get('amenity')) {
					src = imgSrc + 'icones/symbols/amenity/' + feature.get('amenity') + '.svg';
				} else if (feature.get('shop')){
					src = imgSrc + 'icones/symbols/shop/' + feature.get('shop') + '.svg';
				}
				console.log('src', src);
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: src
					})
				});
				return style;
			}
		},
		{
			group: 'Coronavirus',
			title: 'Policia',
			query: 'node[amenity=police]({{bbox}});out meta;',
			iconSrc: imgSrc + 'icones/symbols/amenity/police.svg',
			style: function (feature) {
				var src = '';
				if (feature.get('amenity')) {
					src = imgSrc + 'icones/symbols/amenity/' + feature.get('amenity') + '.svg';
				} else if (feature.get('shop')){
					src = imgSrc + 'icones/symbols/shop/' + feature.get('shop') + '.svg';
				}
				console.log('src', src);
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: src
					})
				});
				return style;
			}
		},
		// Overlay: Iniciatives
		{
			group: 'Iniciatives',
			title: 'Cobertura 112',
			query: 'node[emergency=access_point]({{bbox}});out skel;',
			iconSrc: imgSrc + 'icones/pal_cobertura.png',
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: imgSrc + 'icones/pal_cobertura.png'
					})
				});
				return style;
			}
		},
		{
			group: 'Iniciatives',
			title: 'Desfibril·lador',
			query: 'node[emergency=defibrillator]({{bbox}});out skel;',
			iconSrc: imgSrc + 'icones/aed.png',
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: imgSrc + 'icones/aed.png'
					})
				});
				return style;
			}
		},
		{
			group: 'Iniciatives',
			title: 'Vies sense nom (#1carrer1nom)',
			query: '(way[highway=residential][!name][!noname][!junction]({{bbox}});node(w);way[highway=pedestrian][!name][!noname][!junction]({{bbox}});node(w);way[highway=living_street][!name][!noname][!junction]({{bbox}});node(w);way[highway=unclassified][!name][!noname][!junction]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#FF0000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#FF0000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 2
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Iniciatives',
			title: 'Vies amb nom i tag:noname',
			query: '(way[name][noname]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#FF6C00',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,128,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#FF6C00',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Iniciatives',
			title: 'Vies sense "lanes"',
			query: '(way[highway=motorway][!lanes]({{bbox}});node(w);way[highway=trunk][!lanes]({{bbox}});node(w);way[highway=primary][!lanes]({{bbox}});node(w);way[highway=secondary][!lanes]({{bbox}});node(w);way[highway=tertiary][!lanes]({{bbox}});node(w);way[highway=unclassified][!lanes]({{bbox}});node(w);way[highway=track][!lanes]({{bbox}});node(w);way[highway=residential][!lanes]({{bbox}});node(w);way[highway=service][!lanes]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#006CFF',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,128,255,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#006CFF',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 1
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Iniciatives',
			title: 'Passos de vianants (#1crossing1tag)',
			query: 'node[highway=crossing][crossing_ref]({{bbox}});out meta;',
			iconSrc: imgSrc + 'icones/crossing.png',
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: imgSrc + 'icones/crossing.png'
					})
				});
				return style;
			}
		},
		{
			group: 'Iniciatives',
			title: 'No crossing (#1crossing1tag)',
			query: 'node[highway=crossing][!crossing]({{bbox}});out meta;',
			iconSrc: imgSrc + 'icones/crossingError.png',
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: imgSrc + 'icones/crossingError.png'
					})
				});
				return style;
			}
		},
		{
			group: 'Iniciatives',
			title: 'Estacions monitoratge',
			query: '(node[man_made=monitoring_station]({{bbox}});node(w);way[man_made=monitoring_station]({{bbox}});node(w);relation[man_made=monitoring_station]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#00FF00',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,255,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#00FF00',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Iniciatives',
			title: 'Fonts d\'aigua potable',
			query: 'node[amenity=drinking_water]({{bbox}});out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#0000FF',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,255,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#0000FF',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		// Mobilitat
		{
			group: 'Mobilitat',
			title: 'Radars',
			query: 'node[highway=speed_camera]({{bbox}});out meta;',
			iconSrc: imgSrc + 'icones/radar.png',
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: imgSrc + 'icones/radar.png'
					})
				});
				return style;
			}

		},
		{
			group: 'Mobilitat',
			title: 'crossing=traffic_signals',
			query: 'node[highway=crossing][crossing=traffic_signals]({{bbox}});out meta;',
			iconSrc: imgSrc + 'icones/trafficlight.png',
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: imgSrc + 'icones/trafficlight.png'
					})
				});
				return style;
			}
		},
		{
			group: 'Mobilitat',
			title: 'crossing=no',
			query: 'node[crossing=no]({{bbox}});out meta;',//As crossing=no excludes the existence of a crossing, it must be used without highway=crossing.
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#FF0000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#FF0000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Mobilitat',
			title: 'crossing=uncontrolled',
			query: 'node[highway=crossing][crossing=uncontrolled]({{bbox}});out meta;',
			iconSrc: imgSrc + 'icones/crossing_uncontrolled.png',
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: imgSrc + 'icones/crossing_uncontrolled.png'
					})
				});
				return style;
			}
		},
		{
			group: 'Mobilitat',
			title: 'ES:R1 backward',
			query: 'node["traffic_sign:backward"="ES:R1"]({{bbox}});out meta;',
			iconSrc: imgSrc + 'icones/ES_R1.png',
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: imgSrc + 'icones/ES_R1.png'
					})
				});
				return style;
			}
		},
		{
			group: 'Mobilitat',
			title: 'ES:R2 backward',
			query: 'node["traffic_sign:backward"="ES:R2"]({{bbox}});out meta;',
			iconSrc: imgSrc + 'icones/ES_R2.png',
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: imgSrc + 'icones/ES_R2.png'
					})
				});
				return style;
			}
		},

		// Mobilitat (Exprés.cat)
		{
			group: 'Mobilitat',
			title: 'Exprés.cat (Barcelona)',
			query: '(relation["network"="exprés.cat (Barcelona)"]({{bbox}});way(r)({{bbox}});node(w););out skel;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#40E0D0',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#40E0D0',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Mobilitat',
			title: 'Exprés.cat (Girona)',
			query: '(relation["network"="exprés.cat (Girona)"]({{bbox}});way(r)({{bbox}});node(w););out skel;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#40E0D0',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#40E0D0',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Mobilitat',
			title: 'Exprés.cat (Tarragona)',
			query: '(relation["network"="exprés.cat (Tarragona)"]({{bbox}});way(r)({{bbox}});node(w););out skel;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#40E0D0',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#40E0D0',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Mobilitat',
			title: 'Exprés.cat (Lleida)',
			query: '(relation["network"="exprés.cat (Lleida)"]({{bbox}});way(r)({{bbox}});node(w););out skel;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#40E0D0',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#40E0D0',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},

		//Reciclatge
		{
			group: 'Reciclatge',
			title: 'Paper',
			query: 'node["recycling:paper"="yes"][!access]({{bbox}});out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#0000FF',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,255,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#0000FF',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Reciclatge',
			title: 'Vidre',
			query: 'node["recycling:glass_bottles"="yes"][!access]({{bbox}});out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#00FF00',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,255,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#00FF00',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Reciclatge',
			title: 'Envasos',
			query: 'node["recycling:cans"="yes"][!access]({{bbox}});out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#FFFF00',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,255,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#FFFF00',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Reciclatge',
			title: 'Orgànic',
			query: 'node["recycling:organic"="yes"][!access]({{bbox}});out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#A52A2A',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(165,42,42,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#A52A2A',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Reciclatge',
			title: 'Rebuig',
			query: 'node["recycling:waste"="yes"][!access]({{bbox}});out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#000000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Reciclatge',
			title: 'Piles',
			query: 'node["recycling:batteries"="yes"][!access]({{bbox}});out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#FF0000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#FF0000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Reciclatge',
			title: 'Oli',
			query: 'node["recycling:cooking_oil"="yes"][!access]({{bbox}});out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#6A5ACD',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(106,90,205,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#6A5ACD',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Reciclatge',
			title: 'Privats',
			query: 'node[recycling_type=container][access=private]({{bbox}});out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#808080',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(128,128,128,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#808080',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},

		// Overlay: Accessibilitat
		{
			group: 'Accessibilitat',
			title: 'Plaça aparcament',
			query: 'node["capacity:disabled"]({{bbox}});out;',
			iconSrc: imgSrc + 'accessibilitat/capacity_disabled.svg',
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						scale: 0.04,
						src: imgSrc + 'accessibilitat/capacity_disabled.svg'
					})
				});
				return style;
			}
		},
		{
			group: 'Accessibilitat',
			title: 'Pas de vianant amb semàfor',
			query: 'node[crossing=traffic_signals]({{bbox}});out;',
			iconSrc: imgSrc + 'accessibilitat/crossing_traffic_signals.svg',
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						scale: 0.04,
						src: imgSrc + 'accessibilitat/crossing_traffic_signals.svg'
					})
				});
				return style;
			}
		},
		{
			group: 'Accessibilitat',
			title: 'Comerç Adaptat=sí',
			query: 'node[wheelchair=yes][shop]({{bbox}});out;',
			iconSrc: imgSrc + 'accessibilitat/wheelchair_yes_shop.svg',
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						scale: 0.04,
						src: imgSrc + 'accessibilitat/wheelchair_yes_shop.svg'
					})
				});
				return style;
			}
		},
		{
			group: 'Accessibilitat',
			title: 'Comerç Adaptat=no',
			query: 'node[wheelchair=no][shop]({{bbox}});out;',
			iconSrc: imgSrc + 'accessibilitat/wheelchair_no_shop.svg',
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						scale: 0.04,
						src: imgSrc + 'accessibilitat/wheelchair_no_shop.svg'
					})
				});
				return style;
			}
		},
		{
			group: 'Accessibilitat',
			title: 'Comerç Adaptat parcialment',
			query: 'node[wheelchair=limited][shop]({{bbox}});out;',
			iconSrc: imgSrc + 'accessibilitat/wheelchair_limited_shop.svg',
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						scale: 0.04,
						src: imgSrc + 'accessibilitat/wheelchair_limited_shop.svg'
					})
				});
				return style;
			}
		},
		{
			group: 'Accessibilitat',
			title: 'Obstacle per a la mobilitat',
			query: 'node["obstacle:wheelchair"=yes]({{bbox}});out;',
			iconSrc: imgSrc + 'accessibilitat/obstacle_wheelchair_yes.svg',
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						scale: 0.04,
						src: imgSrc + 'accessibilitat/obstacle_wheelchair_yes.svg'
					})
				});
				return style;
			}
		},
		{
			group: 'Accessibilitat',
			title: 'Vies no adaptades',
			query: '(way[wheelchair=no][highway=footway]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#FF0000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#FF0000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 2
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Wheelchair',
			title: 'Wheelchair=yes',
			query: '(node[wheelchair=yes][shop]({{bbox}});node[wheelchair=yes][amenity]({{bbox}});node[wheelchair=yes][office]({{bbox}}););out meta;',
			iconSrc: imgSrc + 'accessibilitat/wheelchair_yes_shop.svg',
			iconStyle: 'background-color:#714601',
						scale: 0.25,
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: imgSrc + 'accessibilitat/wheelchair_yes_shop.svg'
					})
				});
				return style;
			}
		},  

		{
			group: 'Dades possibles',
			title: 'Senyals Barcelona (Opendata Ajuntament BCN - NO OSM)',
			iconSrc: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2.png',
			geojson: 'https://raw.githubusercontent.com/osm-catalan/osmcatmap/master/src/img/base/2021_06_27_senyals_transit_bcn.geojson',
			style: function (feature) {
				var name = feature.get('name') || '';
				var styles = {
					'amenity': {
						'parking': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 0.4,
						src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2.png'
						}),
							stroke: new ol.style.Stroke({
								color: 'rgba(170, 170, 170, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(170, 170, 170, 0.3)'
							})
						})
					},
					'traffic_sign:backward': {
						'ES:R1': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 0.4,
						src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2.png'
						}),
							stroke: new ol.style.Stroke({
								color: 'rgba(170, 170, 170, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(170, 170, 170, 0.3)'
							})
						})
										},
					'traffic_sign:forward': {
						'ES:R1': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 0.4,
						src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R1.png'
						}),
							stroke: new ol.style.Stroke({
								color: 'rgba(170, 170, 170, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(170, 170, 170, 0.3)'
							})
						}),
						'ES:R2': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 0.4,
						src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2.png'
						}),
							stroke: new ol.style.Stroke({
								color: 'rgba(170, 170, 170, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(170, 170, 170, 0.3)'
							})
						}),
'ES:P1': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P1.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P10a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P10a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P10b': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P10b.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P10c': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P10c.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P11': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P11.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P11a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P11a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P13a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P13a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P13b': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P13b.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P14a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P14a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P14b': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P14b.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P15': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P15.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P15a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P15a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P15b': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P15b.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P16a_10': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a_10.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P16a_14': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a_14.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P16b_10': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b_10.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P16b_17': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b_17.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P17': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P17.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P17a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P17a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P17b': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P17b.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P18': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P18.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P19': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P19.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P1a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P1a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P1b': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P1b.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P1c': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P1c.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P1d': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P1d.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P20': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P20.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P20a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P20a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P21': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P21.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P21LUZ': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P21LUZ.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P21LUZ2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P21LUZ2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P22': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P22.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P24': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P24.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P25': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P25.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P25 bici': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P25 bici.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P26': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P26.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P29': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P29.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P3': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P3.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P31': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P31.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P34': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P34.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P4': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P4.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P50': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P50.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P50o': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P50o.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P6': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P6.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P8': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P8.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P9a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P9a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P9b': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P9b.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P9c': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P9c.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'PANEL': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/PANEL.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'PAP': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/PAP.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ParadaBus': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ParadaBus.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'PARCCOLL': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/PARCCOLL.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'Parcs_4Pictos': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/Parcs_4Pictos.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'Parcs_AreaGosso': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/Parcs_AreaGosso.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'Parcs_JocsInfan': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/Parcs_JocsInfan.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'PelPeat': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/PelPeat.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'PrioritatBus': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/PrioritatBus.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'PROH_TAX_JPeiro': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/PROH_TAX_JPeiro.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'PROHPILOTA': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/PROHPILOTA.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'PuntVerd': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/PuntVerd.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R1': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R1.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R100': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R100.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R100 VP Bici': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R100 VP Bici.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R100Bus': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R100Bus.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R101': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R101.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R101 VP Bici': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R101 VP Bici.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R102': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R102.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R103': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R103.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R104': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R104.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R105': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R105.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R106': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R106.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_1.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_1.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_10': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_10.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_16': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_16.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_16.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_16.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_2.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_2.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_20': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_20.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_20.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_20.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_3.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_3.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_30': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_30.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_4.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_4.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_5.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_5.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_6': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_6.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_6.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_6.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_7.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_7.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R108': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R108.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R114': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R114.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R116': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R116.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R2_AMA': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2_AMA.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R200': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R200.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_1.3': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_1.3.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_1.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_1.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_10': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_10.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_16': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_16.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_18': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_18.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_20': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_20.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_3.0': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_3.0.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_3.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_3.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_5.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_5.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_6': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_6.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_7.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_7.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_8': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_8.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R202': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R202.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R202_12': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R202_12.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R203_10': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R203_10.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R203_12': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R203_12.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R203_5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R203_5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R203_6': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R203_6.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R203_7': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R203_7.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R203_7.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R203_7.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R203_8': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R203_8.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R203_8.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R203_8.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R204_2.0': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204_2.0.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R204_2.2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204_2.2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R204_2.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204_2.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R204_2.8': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204_2.8.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R204_3': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204_3.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R204_3.2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204_3.2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R204_4.2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204_4.2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_1.9': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_1.9.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_2.1': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_2.1.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_2.2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_2.2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_2.3': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_2.3.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_2.4': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_2.4.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_2.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_2.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_2.6': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_2.6.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_2.8': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_2.8.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_3': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_3.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_3.1': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_3.1.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_3.2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_3.2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_3.4': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_3.4.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_3.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_3.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_3.6': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_3.6.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_3.8': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_3.8.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_4': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_4.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_4.2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_4.2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_4.3': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_4.3.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_4.4': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_4.4.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_4.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_4.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_4.7': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_4.7.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_5.3': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_5.3.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_5.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_5.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R2o': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2o.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R300': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R300.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R301_10': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301_10.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R301_15': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301_15.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R301_20': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301_20.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R301_30': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301_30.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R301_40': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301_40.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R301_50': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301_50.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R301_60': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301_60.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R301_80': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301_80.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R301_90': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301_90.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R302': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R302.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R303': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R303.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R304': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R304.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R305': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R305.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R306': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R306.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R307': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R307_0-24h': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307_0-24h.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R307D': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307D.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R307Da': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307Da.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R307I': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307I.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R307Ia': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307Ia.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R307L': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307L.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R307La': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307La.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R307P': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307P.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R307PD': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307PD.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R307PI': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307PI.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R307PL_Motos': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307PL_Motos.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308 ES:R407': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308 ES_R407.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308_0-24h': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308_0-24h.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308_Motos': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308_Motos.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308b': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308b.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308c': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308c.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308CAMPNOU2_A': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308CAMPNOU2_A.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308CAMPNOU3_C': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308CAMPNOU3_C.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308CAMPNOU4_B': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308CAMPNOU4_B.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308cI': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308cI.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308cL': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308cL.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308d': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308d.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308D_0-24h': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308D_0-24h.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308D_Minus': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308D_Minus.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308D2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308D2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308dD': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308dD.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308dI': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308dI.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308I': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308I.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308I_0-24h': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308I_0-24h.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308I_Minus': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308I_Minus.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308L': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308L.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308L_Minus': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308L_Minus.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308P': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308P.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308P_1-15': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308P_1-15.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308P_Motos': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308P_Motos.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308PD': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308PD.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308PD_0-24h': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308PD_0-24h.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308PI': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308PI.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308PI_0-24h': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308PI_0-24h.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308PI_Motos': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308PI_Motos.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308PL': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308PL.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R309': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R309.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R310': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R310.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R400a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R400b': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400b.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R400c': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400c.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R400CanviSenti': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400CanviSenti.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R400d': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400d.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R400e': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400e.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R401a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R401a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R401b': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R401b.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R402': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R402.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R403a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R403a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R403b': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R403b.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R403c': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R403c.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R404': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R404.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R405': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R405.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R407': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R407.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R407_FIN': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R407_FIN.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R410': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R410.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R410_FIN': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R410_FIN.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R413': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R413.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R500': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R500.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R501_30': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501_30.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R501_40': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501_40.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R501_50': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501_50.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R502': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R502.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R503': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R503.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R506_30': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R506_30.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R6': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R6.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'RestriccioZ2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/RestriccioZ2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'RestriccioZ2 S1': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/RestriccioZ2 S1.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'RestriccioZ2 S2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/RestriccioZ2 S2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'RestriccioZ3 S1': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/RestriccioZ3 S1.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'RestriccioZ3 S2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/RestriccioZ3 S2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'RestriccioZ4': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/RestriccioZ4.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'RestriccioZ4 S1': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/RestriccioZ4 S1.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'RestriccioZ4 S2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/RestriccioZ4 S2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'RestriccioZ4 S3': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/RestriccioZ4 S3.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'RestriccioZ4 S4': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/RestriccioZ4 S4.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S1': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S1.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S100': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S100.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S102': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S102.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S102D': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S102D.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S102I': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S102I.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S102R': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S102R.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S102RD': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S102RD.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S103': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S103.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S105': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S105_1500': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105_1500.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S105_500': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105_500.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S105a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S105a_500': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105a_500.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S105aD': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105aD.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S105aI': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105aI.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S105aR': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105aR.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S105vi': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105vi.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S106': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S106.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S106_50': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S106_50.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S108': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S108.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S109': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S109.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S11': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S11.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S111': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S111.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S118': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S118_100': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118_100.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S118_200': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118_200.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S122_Microf': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S122_Microf.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S122_TÃºnel': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S122_TÃºnel.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S13': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S13.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S13_AMA': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S13_AMA.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S15a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S15a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S15b': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S15b.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S15c': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S15c.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S15d': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S15d.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17_10min': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17_10min.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17_20min': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17_20min.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17_2h': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17_2h.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17_30min': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17_30min.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17_Fila': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17_Fila.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17_Glories': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17_Glories.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17_MINUS': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17_MINUS.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17_motos': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17_motos.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17D': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17D.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17D_motos': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17D_motos.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17I': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17I.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17I_Fila': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17I_Fila.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17I_MINUS': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17I_MINUS.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17I_Motos': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17I_Motos.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17L': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17L.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S18': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S18.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S18D': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S18D.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S18I': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S18I.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S18L': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S18L.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S19': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S19.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S20': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S20.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S22': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S22_050': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_050.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S22_100': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_100.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S22_250': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_250.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S23': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S23.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S23A': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S23A.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S23B': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S23B.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S23o': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S23o.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S24': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S24.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S26a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S26a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S26c': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S26c.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S28': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S28.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S29': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S29.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S35': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S35.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S35_Verde': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S35_Verde.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S35REC': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S35REC.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S35REC_Blanca': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S35REC_Blanca.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S35REC_BlancaF': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S35REC_BlancaF.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S36REC': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S36REC.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S51': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S51.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S52a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S52a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S52c2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S52c2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S52d3': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S52d3.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S6': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S6.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S60a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S60a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S60a11': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S60a11.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S60a21': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S60a21.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S7_30': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_30.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S7_40': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_40.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S7_50': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_50.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S800_1500': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800_1500.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S800_2000': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800_2000.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S800b_5km': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800b_5km.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S800b_7km': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800b_7km.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S820': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S820.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S840_100': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S840_100.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S870': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S870.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S870I': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S870I.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S9': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S9.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S900': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S900.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),


						'.*': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 3
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'building': {
						'.*': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(246, 99, 79, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(246, 99, 79, 0.3)'
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'highway': {
						'service': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 2
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'.*': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 3
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'landuse': {
						'forest|grass|allotments': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(140, 208, 95, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(140, 208, 95, 0.3)'
							})
						})
					},
					'natural': {
						'tree': new ol.style.Style({
							image: new ol.style.Circle({
								radius: 2,
								fill: new ol.style.Fill({
									color: 'rgba(140, 208, 95, 1.0)'
								}),
								stroke: null
							})
						})
					}
				};
				for (var key in styles) {
					var value = feature.get(key);
					if (value !== undefined) {
						for (var regexp in styles[key]) {
							if (new RegExp(regexp).test(value)) {
								return styles[key][regexp];
							}
						}
					}
				}
				return null;
			} 
		}
	],

	//Es crida sempre que es fa click sobre el mapa
	onClickEvent: function(evt, view, coordinateLL) {

		var edit = $('<div>').html(config.i18n.editWith);
		//ID editor
		edit.append($('<a>').css('marginLeft', 5).attr({title: 'iD', href: 'https://www.openstreetmap.org/edit?editor=id&lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom(), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'ID.svg', height: 20, width: 20})));
		//Potlatch 2 editor
		edit.append($('<a>').css('marginLeft', 5).attr({title: 'Potlatch 2', href: 'https://www.openstreetmap.org/edit?editor=potlatch2&lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom(), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'potlatch2logobig.png', height: 20, width: 20})));
		//JOSM editor
		edit.append($('<a>').css('marginLeft', 5).attr({title: 'JOSM', href: 'https://www.openstreetmap.org/edit?editor=remote&lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom(), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'JOSM Logotype 2019.svg', height: 20, width: 20})));

		var open = $('<div>').html(config.i18n.openWith);
		//OSM
		open.append($('<a>').css('marginLeft', 5).attr({title: 'OSM', href: 'https://www.openstreetmap.org/?lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom(), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osm_logo-layer.svg', height: 20, width: 20})));
		//Latest OpenStreetMap Edits per Tile
		open.append($('<a>').css('marginLeft', 5).attr({title: 'Latest OpenStreetMap Edits per Tile', href: 'https://resultmaps.neis-one.org/osm-change-tiles#' + view.getZoom() + '/' + coordinateLL[1] + '/' + coordinateLL[0], target: '_blank'}).html($('<img>').attr({src: imgSrc + 'neis-one_logo.png', height: 20, width: 20})));
		//Here WeGo
		open.append($('<a>').css('marginLeft', 5).attr({title: 'HERE WeBo', href: 'https://wego.here.com/?map=' + coordinateLL[1] + ',' + coordinateLL[0] + ',' + Math.min(view.getZoom(), 18) + ',normal', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'here_logo.png', height: 20, width: 20})));
		//Google
		open.append($('<a>').css('marginLeft', 5).attr({title: 'Google Maps', href: 'https://maps.google.es/maps?ll=' + coordinateLL[1] + ',' + coordinateLL[0] + '&z=' + Math.min(view.getZoom(), 21), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'gmaps_logo_layer.png', height: 20, width: 20})));

		var tool = $('<div>').html(config.i18n.checkTools);
		//Notes a OSM
		tool.append($('<a>').css('marginLeft', 5).attr({title: 'Notes a OSM', href: 'https://www.openstreetmap.org/?lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom() + '&layers=N', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osm_logo-layer.svg', height: 20, width: 20})));
		//Keep right!
		tool.append($('<a>').css('marginLeft', 5).attr({title: 'Keep right!', href: 'https://www.keepright.at/report_map.php?lang=es&lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + Math.min(view.getZoom(), 19) + '&ch50=1&ch191=1&ch195=1&ch201=1&ch205=1&ch206=1&ch311=1&ch312=1&ch313=1&ch402=1&number_of_tristate_checkboxes=8&highlight_error_id=0&highlight_schema=0show_ign=1&show_tmpign=1&layers=B0T&ch=0%2C50%2C70%2C170%2C191%2C195%2C201%2C205%2C206%2C220%2C231%2C232%2C311%2C312%2C313%2C402', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'keepright_logo.png', height: 20, width: 20})));
		//Geofabrik Tools
		tool.append($('<a>').css('marginLeft', 5).attr({title: 'Geofabrik Tools', href: 'https://tools.geofabrik.de/osmi/?lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + Math.min(view.getZoom(), 18) + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'geofabrik.png', height: 20, width: 20})));

		return $.merge($.merge(edit, open), tool);
	},

	//Es crida per cada element trobat al fer click
	forFeatureAtPixel: function(evt, feature) {
		var node = $('<div>').css('borderTop', '1px solid');
		var metaNode = feature.get('meta');

		if (metaNode && metaNode['type']) {
			var nodeType = metaNode['type'];
			node.append([config.i18n[nodeType==='node' ? 'nodeLabel' : 'wayLabel'], ' ', $('<a>').css('fontWeight', 900).attr({href: 'https://www.openstreetmap.org/' + nodeType + '/' + feature.getId(), target: '_blank'}).html(feature.getId()), '<br/>']);
		} else {
			node.append([config.i18n.nodeLabel, ' ', $('<span>').css('fontWeight', 900).html(feature.getId()), '<br/>']);
		}

		$.each(feature.getProperties(), function (index, value) {
			if (typeof value !== 'object') {
				node.append([$('<a>').attr({href: 'https://wiki.openstreetmap.org/wiki/Key:' + index + '?uselang=ca', target: '_blank'}).html(index), ': ', value, '<br/>']);
			}
		});

		if (metaNode) {
			var metaNodeDiv = $('<div>').css({'borderLeft': '1px solid', 'margin': '2px 0 0 3px', 'paddingLeft': '3px'});
			$.each(metaNode, function (index, value) {
				if (index !== 'id' && index !== 'type' && index !== 'uid') {
					var valueEl = value;
					switch (index) {
						case 'user':
							valueEl = $('<a>').attr({href: 'https://www.openstreetmap.org/user/' + value, target: '_blank'}).html(value);
							break;
						case 'changeset':
							valueEl = $('<a>').attr({href: 'https://www.openstreetmap.org/changeset/' + value, target: '_blank'}).html(value);
							break;
					}
					metaNodeDiv.append([index, ': ', valueEl, '<br/>']);
				}
			});
			node.append(metaNodeDiv);
		}

		return node;
	},

	//Es crida sempre que es fa click sobre el mapa
	onClickEventExtra: function(evt, view, coordinateLL, numFeatures) {

		if (!numFeatures) {
			//TODO Consulta dels nodes proxims a la posicio
			var marge = 0.0003,
				query = 'node({{bbox}});out;';

			query = query.replace('{{bbox}}', (coordinateLL[1] - marge) + ',' + (coordinateLL[0] - marge) + ',' + (coordinateLL[1] + marge) + ',' + (coordinateLL[0] + marge));
			console.log('query:', query);
		}

		return {};
	}
};
