# OSMCATMap
Prova de concepte de mapes de la comunitat catalana d'Openstreetmap

Based on ideas of `https://osm-catalan.github.io/osmcatmap/` and `https://github.com/Ripollx/osmcatmap2` .
Developed with [OpenLayers](https://openlayers.org/) library  and with API from [Overpass Turbo](https://wiki.openstreetmap.org/wiki/Overpass_turbo) available on [Overpass Turbo website](https://overpass-turbo.eu/).

# [Mapa](http://osm-catalan.github.io/osmcatmap)

## [Mapa anterior](http://osm-catalan.github.io/osmcatmap/anterior)

Mapa basat en [Bicycle tags map](https://wiki.openstreetmap.org/wiki/Bicycle_tags_map)

Amb modificacions de [Ramiro Balado](https://github.com/Qjammer)

El mapa ens permet la mostra d'elements determinats personalitzables tenint com a fons varis mapes diferents.
Per poder-ho fer hem de seguir les instruccions que trobarem en aquests arxius (poden estar en anglès) cercant la cadena "MODIFICAR"

### index.html

* Modificar títol
* Latitud, longitud i zoom d'inici
* Modificar layers i atribucions
* Possibilitat de modificar pestanyes

### js_source/noordpass.js 

* Missatges error
* Nivell de zoom per veure dades (allau de dades=petició incorrecta)
* Estils opcions (cos de lletra, etc.)

### js_source/localtracks.js

* Mida GPX
* Interfície càrrega GPX

### js_source/layerdef.js

* replicar i modificar functions
* crear noves pestanyes (type=test)
* crear noves opcions
* Enllaços en l'emergent que surt en fer clic sobre un punt

# [Wiki a OSM](https://wiki.openstreetmap.org/wiki/WikiProject_Catalan)
