# Mapa de la Comunitat Catalana : Motiu
OSM CAT MAP  neix de l'adaptació del mapa de la comunitat catalana a mostrar qualsevol tipus d'informació temàtica.
Aprofitant la base de dades d'Openstreetmap es mostren les campanyes d'etiquetatge de la comunitat catalana en els darrers temps.

# 0-La Base de dades: Openstreetmap
OSM (Openstreetmap) no és un mapa, és una base de dades de punts i línies geolocalitzats, que entre d'altres coses es pot aprofitar per fer mapes (renderitzacions). Però també es poden aprofitar les dades (en aquest cas, contenidors) .Tot plegat es fa amb claus, valors i relacions en aquests punts i línies.

# 1-Mapa

-Mapa basat en [Bicycle tags map](https://wiki.openstreetmap.org/wiki/Bicycle_tags_map)

-Amb modificacions de [Ramiro Balado](https://github.com/Qjammer)

-Versió nova Openlayers feta per [Ripollx](https://github.com/Ripollx)

-Possibilitat d'afegir JSONs feta per [Hugoren Martinako ](https://github.com/Crashillo)

-Consultes complexes afegides per [Ismael Luceno](https://github.com/ismaell)

-Idees addicionals per [yopaseopor](https://github.com/yopaseopor)

El mapa ens mostra tot de campanyes que la comunitat catalana ha anat complint al llarg dels darrers anys amb l'objectiu de millorar el mapa.


*	Accessibilitat (Wheelchair)
*	Voreres (adaptació)
*	Encreuaments
*	Vies
*	Àrees
*	Altres
*	Vorades
*	Zones d'aparcament
*	Mobilitat
*	COVID19
*	Iniciatives
*	Reciclatge
*	Accessibilitat (Altres)
*	Dades possibles

Directament es pot modificar la pàgina editant els arxius corresponents:

*    index.html conté l'esquelet de la pàgina.
*    index.js conté l'orquestador per utilitzar OpenLayers (només es requereix modificar per afegir noves funcionalitats).
*    config.js conté la definició de les capes, idioma i característiques que es volen mostrar.

# [Exemple del mapa funcionant](https://osm-catalan.github.io/osmcatmap)

# Agraïments

A la [Comunitat Catalana d'Openstreetmap](https://t.me/osmcat) i a [OSM España](https://t.me/osmes) per permetre aquests mapes, així com als desenvolupadors que hi han col·laborat.