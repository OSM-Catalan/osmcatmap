
// ====================
// bevat de query strings voor de verschillende lagen
//
// formaat make_layer variabelen:
//
//<URL> string 'url',<color>: string '#RGB', <name>: string '[imagetype]tekst', <lijnbreedte>[.cirkelradius]: int/float, <zichtbaarheid> : boolean, [lijntpye][transparantie] :string '[aan uit (aan uit ( ...))][@transparantie]'
//
// imagetype: #l# = lijn, #dl#=dubbele lijn, #d# = stippellijn, #c#= transparant, #co# = cirkel opaque met cijfers
// aan/uit = pixellengte van de lijn, zichtbare lijn-open gedeelte
// transparantie = 0-1 transparantie van de lijn
//
//=====================
// ====================
// COPIAR 	
// COPIAR Copy this if you want a line
// COPIAR
// COPIAR	function nameofthefunction(color){
// COPIAR		return(
// COPIAR		{
// COPIAR			strokeColor:"color",
// COPIAR			strokeOpacity:0.7,
// COPIAR			strokeWidth:2,
// COPIAR			strokeLinecap: "square",
// COPIAR			strokeDashstyle: "1 0"
// COPIAR		});
// COPIAR	}
// COPIAR
// COPIAR Copy this if you want a point
// COPIAR	function nameofthefunction(color){
// COPIAR		return (
// COPIAR		{
// COPIAR			strokeColor:color,
// COPIAR			strokeOpacity:0.9,
// COPIAR			strokeWidth:3,
// COPIAR			pointRadius:5,
// COPIAR			fillColor:"white",
// COPIAR			fillOpacity:0.75
// COPIAR		});
// COPIAR	}
// COPIAR Copy this if you want an external icon
// COPIAR 		function tsforward(url){
// COPIAR 		return (
// COPIAR 		{
// COPIAR 			externalGraphic:url,
// COPIAR 			graphicOpacity: 0.75,
// COPIAR 			graphicWidth:20,
// COPIAR 			graphicHeight:20,
// COPIAR 			graphicXOffset: 4,
// COPIAR 			graphicYOffset: 0,
// COPIAR 			rotation:0
// COPIAR 		});
// COPIAR 	}
//	
// COPIAR	if (type == "nameofthetdid"){   of index.html
// COPIAR	map.addLayers([
// COPIAR  make_layer(QURL + "?data=(way[key=value](bbox);node(w);way[otherkey=othervalue](bbox);node(w););out+skel;",
// COPIAR  name="#typeoflineoriconinlegend#HTML code you want to show"
// COPIAR  nameofthefunction("http://urloftheicon" or "color"),
// COPIAR  false
// COPIAR	),
// COPIAR  from "make_layer" to ), you can replicate to generate every overpass query then... (next line)
// COPIAR			]);
// COPIAR			
// COPIAR		}
// VOCABULARI nameofthefuncition= name of the function, Each function with custom parameters has to have an unique name.
// VOCABULARI
// VOCABULARI strokeColor=color of the line
// VOCABULARI strokeOpacity=0-1 transparency of the line
// VOCABULARI strokeWidth=Width of the line
// VOCABULARI strokeLinecap=Form of the cap of the line
// VOCABULARI strokeDashstyle=start/end of the line pixels in which start the line, if it is discontinuous
// VOCABULARI pointRadius=number in píxels for the radius of the point
// VOCABULARI fillColor=color you want to fill the cercle
// VOCABULARI fillOpacity=0-1 transparency of the filled cercle
// VOCABULARI graphicOpacity=0-1 transparency of the icon
// VOCABULARI graphicWidth=in pixels, width of the icon
// VOCABULARI graphicHeight=in pixels, height of the icon
// VOCABULARI graphicXOffset=in pixels, offset in x from the point of the icon
// VOCABULARI graphicYOffset=in pixels, offset in y from the point of the icon
// VOCABULARI rotation:in grades, rotation angle of the icon
// VOCABULARI nameofthe td id you will find in index.html
// VOCABULARI QURL + "?data=overpass query"
// VOCABULARI #typeoflineoriconinlegend#: #l# = line, #dl#=discontinuous line, #d# = dashed line, #c#= cercle,#to# = point #ex#=external icon
// VOCABULARI nameofthefunction("color")
// VOCABULARI false or true default active option true enabled false unabled
// VOCABULARI Also you can custom the option to show the legend
//
function layerdef(type){

	/*
	 * {
	 * 	strokeColor: "red",
	 * 	strokeOpacity: 0.9,
	 * 	strokeWidth: 5,
	 * 	strokeLinecap: "square",
	 * 	strokeDashstyle: "1 0"
	 */
	function defaultSolidLine(color){
		return(
		{
			strokeColor:color,
			strokeOpacity:0.7,
			strokeWidth:2,
			strokeLinecap: "square",
		});
	}

	function defaultDashedLine(color){
		return(
		{
			strokeColor:color,
			strokeOpacity:0.7,
			strokeWidth:2,
			strokeLinecap: "square",
			strokeDashstyle: "6 10"
		});
	}

	if (type == "cycleways"){
		//	dit maakt de layers voor de cycleway tags
		map.addLayers([
		//highway=cycleway
			make_layer(
				QURL + "?data=(way[highway=cycleway](bbox);node(w);way[highway~'path$|^footway$'][bicycle=designated](bbox);node(w););out+skel;",
				name="#l#highway=cycleway",
				defaultSolidLine("red"),
				false,
			),
			//Bromfiets/Fietpaden/Onverpl.fietspaden
            make_layer(
				QURL + "?data=(way[highway=cycleway][moped~'^designated$|^yes$'](bbox);node(w);way[highway=cycleway]['moped:forward'~'^designated$|^yes$'](bbox);node(w);way[highway=cycleway]['moped:backward'~'^designated$|^yes$'](bbox);node(w););out+skel;",
				name="#l#cycleway, moped=yes",
				defaultSolidLine("purple"),
				false
			),
			  
            make_layer(
				QURL + "?data=(way[highway=cycleway][moped=no](bbox);node(w););out+skel;",
				name="#dl#cycleway moped=no",
				defaultDashedLine("cyan"),
				false
			),
			
            make_layer(
				QURL + "?data=(way[highway=cycleway][mofa=no](bbox);node(w););out+skel;", 
				name="#l#cycleway mofa=no",
				defaultSolidLine("cyan"),
				false),
			

		]);
	}

	/*
	 * base Point Parameters:
	 * {
	 * 	strokeColor:"#FFFFFF",
	 * 	strokeOpacity:0.9,
	 * 	strokeWidth:3,
	 * 	pointRadius:3
	 * 	fillColor: "white",
	 * 	fillOpacity: 0.75,
	 * }
	 */
	function defaultPoint(color){
		return (
		{
			strokeColor:color,
			strokeOpacity:0.9,
			strokeWidth:3,
			pointRadius:5,
			fillColor:"white",
			fillOpacity:0.75
		});
	}
	
		function defaultPoint2(color){
		return (
		{
			strokeColor:color,
			strokeOpacity:0.5,
			strokeWidth:3,
			pointRadius:5,
			fillColor:"white",
			fillOpacity:0.5
		});
	}
	
		function defaultPoint3(color){
		return (
		{
			strokeColor:color,
			strokeOpacity:1,
			strokeWidth:3,
			pointRadius:5,
			fillColor:"white",
			fillOpacity:0
		});
	}
	
		function defaultPoint4(color){
		return (
		{
			strokeColor:color,
			strokeOpacity:0.9,
			strokeWidth:3,
			pointRadius:7,
			fillColor:"white",
			fillOpacity:0
		});
	}
	
			function defaultPoint5(color){
		return (
		{
			strokeColor:color,
			strokeOpacity:0.9,
			strokeWidth:3,
			pointRadius:9,
			fillColor:"white",
			fillOpacity:0
		});
	}

	/*
	 * external Point Parameters:
	 * {
	 * 	externalGraphic: "path/to/icon.png",
	 * 	graphicWidth: 6,
	 * 	graphicHeight:6,
	 * 	graphicOpacity: 0.75,
	 * 	graphicXOffset: 0,
	 * 	graphicYOffset: 0,
	 * 	rotation: 0
	 * }
	 */
	function defaultExtPoint(url){
		return (
		{
			externalGraphic:url,
			graphicWidth:16,
			graphicHeight:16,
			rotation:0
		});
	}
	
		function defaultExtPoint2(url){
		return (
		{
			externalGraphic:url,
			graphicHeight:20,
			rotation:0
		});
	}
	
		function tsforward(url){
		return (
		{
			externalGraphic:url,
			graphicWidth:20,
			graphicHeight:20,
			graphicXOffset: 4,
			graphicYOffset: 0,
			rotation:0
		});
	}
	
		function tsbackward(url){
		return (
		{
			externalGraphic:url,
			graphicWidth:20,
			graphicHeight:20,
			graphicXOffset: -4,
			graphicYOffset: 0,
			rotation:180
		});
	}
	
	
				if (type == "accessibilitat"){ //MODIFICAR 
		
		map.addLayers([

			make_layer(
				QURL + "?data=node[wheelchair=yes][shop](bbox);out+skel;",
				name="#ex#&nbspAdaptat=sí",
				defaultExtPoint("https://github.com/yopaseopor/accessibilitat/raw/master/icons/wheelchair_yes_shop.png"),
				false
			),

			make_layer(
				QURL + "?data=node[wheelchair=no][shop](bbox);out+skel;",
				name="#ex#&nbspAdaptat=no",
				defaultExtPoint("https://github.com/yopaseopor/accessibilitat/raw/master/icons/wheelchair_no_shop.png"),
				false
			),

			make_layer(
				QURL + "?data=node['capacity:disabled'='1'](bbox);out+skel;",
				name="#ex#&nbspPlaça aparcament",
			defaultExtPoint("https://github.com/yopaseopor/accessibilitat/raw/master/icons/capacity_disabled.png"),
				false
			),

			make_layer(
				QURL + "?data=node[wheelchair=limited][shop](bbox);out+skel;",
				name="#ex#&nbspMobilitat limitada",
				defaultExtPoint("https://github.com/yopaseopor/accessibilitat/raw/master/icons/wheelchair_limited_shop.png"),
				false
			),

			make_layer(
				QURL + "?data=node['obstacle:wheelchair'=yes](bbox);out+skel;",
				name="#ex#&nbspObstacle per a la mobilitat",
				defaultExtPoint("https://github.com/yopaseopor/accessibilitat/raw/master/icons/obstacle_wheelchair_yes.png"),
				false
			),

			make_layer(
				QURL + "?data=node[crossing=traffic_signals](bbox);out+skel;",
				name="#ex#&nbspPas de vianant amb semàfor",
				defaultExtPoint("https://raw.githubusercontent.com/yopaseopor/accessibilitat/master/icons/crossing_traffic_signals.png"),
				false
			),

			make_layer(
				QURL + "?data=node[crossing=no](bbox);out+skel;",
				name="#ex#&nbspProhibit passar",
				defaultExtPoint("https://github.com/yopaseopor/accessibilitat/raw/master/icons/crossing_no.png"),
				false
			),

			make_layer(
				QURL + "?data=node[crossing=uncontrolled](bbox);out+skel;",
				name="#ex#&nbspPas de vianants",
				defaultExtPoint("https://github.com/yopaseopor/accessibilitat/raw/master/icons/crossing_uncontrolled.png"),
				false
),
		make_layer(
				QURL + "?data=node[crossing=unmarked](bbox);out+skel;",
				name="#ex#&nbspPassos no senyalitzats",
				defaultExtPoint("https://github.com/yopaseopor/accessibilitat/raw/master/icons/crossing_unmarked.png"),
				false
			),
					//highway=cycleway
			make_layer(
				QURL + "?data=(way[wheelchair=no][highway=footway](bbox);node(w););out+skel;",
				name="#l#Voreres amb problemes",
				defaultSolidLine("red"),
				false,
			),
			 
			]);
	}

	

		if (type == "iniciatives"){ //MODIFICAR 
		
		map.addLayers([
		
			make_layer(
				QURL + "?data=(node[emergency=access_point](bbox););out+skel;",
				name="#ex#&nbspCobertura 112",
				defaultExtPoint2("https://github.com/osm-catalan/osmcatmap/raw/master/img/pal_cobertura.png"),
				false
			),

			make_layer(
				QURL + "?data=(node[emergency=defibrillator](bbox););out+skel;",
				name="#ex#&nbspDesfibril·lador",
				defaultExtPoint("https://github.com/osm-catalan/osmcatmap/raw/master/img/aed.png"),
				false
						),

			make_layer(
				QURL + "?data=node[highway=crossing](bbox);out+skel;",
				name="#ex#&nbspPassos de vianants (#1crossing1tag)",
				defaultExtPoint("https://d30y9cdsu7xlg0.cloudfront.net/png/35167-200.png"),
				false
						),
					//highway=cycleway
			make_layer(
				QURL + "?data=(way[highway=residential][name!][noname!][junction!](bbox);node(w);way[highway=unclassified][name!][noname!][junction!](bbox);node(w);way[highway=pedestrian][name!][noname!][junction!](bbox);node(w);way[highway=living_street][noname!][name!][junction!](bbox);node(w););out+skel;",
				name="#l#Vies sense nom (#1carrer1nom)",
				defaultSolidLine("red"),
				false,
			),

			make_layer(
			
QURL + "?data=(relation['network'='exprés.cat (Barcelona)'](bbox);way(r)(bbox);node(w););out+skel;",
				name="#l#Exprés.cat Barcelona",
				defaultSolidLine("turquoise"),
				false,
			),
			
//make_layer(
//QURL + "?data=(relation['network'='exprés.cat (Barcelona)']['public_transport'='stop_position'](bbox);way(r)(bbox);node(r);node._['public_transport'='stop_position'](bbox););out+skel;",
//				name="#c#Parades Exprés.cat Barcelona",
//				defaultPoint2("turquoise"),
//				false,
//			),
make_layer(			
			QURL + "?data=(relation['network'='exprés.cat (Girona)'](bbox);way(r)(bbox);node(w););out+skel;",
				name="#l#Exprés.cat Girona",
				defaultSolidLine("turquoise"),
				false,
			),
make_layer(			
			QURL + "?data=(relation['network'='exprés.cat (Tarragona)'](bbox);way(r)(bbox);node(w););out+skel;",
				name="#l#Exprés.cat Tarragona",
				defaultSolidLine("turquoise"),
				false,
			),
make_layer(			
			QURL + "?data=(relation['network'='exprés.cat (Lleida)'](bbox);way(r)(bbox);node(w););out+skel;",
				name="#l#Exprés.cat Lleida",
				defaultSolidLine("turquoise"),
				false,
						),

			 
			]);
	}			
		if (type == "mobilitat"){

			map.addLayers([
			
			make_layer(
				QURL + "?data=node[highway=speed_camera](bbox);out+skel;",
				name="#c#&nbspRadars<hr>",
				defaultPoint("blue"),
				false
			),

			make_layer(
				QURL + "?data=node[crossing=traffic_signals](bbox);out+skel;",
				name="#ex#&nbspcrossing=traffic_signals",
				defaultExtPoint("http://icons.iconarchive.com/icons/google/noto-emoji-travel-places/1024/42571-vertical-traffic-light-icon.png"),
				false
			),

			make_layer(
				QURL + "?data=node[crossing=no](bbox);out+skel;",
				name="#c#&nbspcrossing=no",
				defaultPoint("red"),
				false
			),

			make_layer(
				QURL + "?data=node[crossing=uncontrolled](bbox);out+skel;",
				name="#ex#&nbspcrossing=uncontrolled",
				defaultExtPoint("https://d30y9cdsu7xlg0.cloudfront.net/png/35167-200.png"),
				false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R1'](bbox);out+skel;",
name="#ex#&nbspES:R1 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R1.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R2'](bbox);out+skel;",
name="#ex#&nbspES:R2 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R2.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S13'](bbox);out+skel;",
name="#ex#&nbspES:S13 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S13.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:S572'](bbox);out+skel;",
name="#ex#&nbspES:S572 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S572.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R305'](bbox);out+skel;",
name="#ex#&nbspES:R305 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R305.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R101'](bbox);out+skel;",
name="#ex#&nbspES:R101 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R101.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:P15'](bbox);out+skel;",
name="#ex#&nbspES:P15 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P15.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R1'](bbox);out+skel;",
name="#ex#&nbspES:R1 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R1.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R2'](bbox);out+skel;",
name="#ex#&nbspES:R2 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R2.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S13'](bbox);out+skel;",
name="#ex#&nbspES:S13 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S13.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:S572'](bbox);out+skel;",
name="#ex#&nbspES:S572 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_S572.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R305'](bbox);out+skel;",
name="#ex#&nbspES:R305 forward ",
false
),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:R101'](bbox);out+skel;",
name="#ex#&nbspES:R101 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R101.png"),
false
),
make_layer(
QURL + "?data=node['traffic_sign:forward'='ES:P15'](bbox);out+skel;",
name="#ex#&nbspES:P15 forward ",
tsforward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_P15.png"),
false
),
		make_layer(
				QURL + "?data=node[crossing=unmarked](bbox);out+skel;",
				name="#c#&nbspcrossing=unmarked<hr>",
				{
					strokeColor:"grey",
					strokeOpacity:0.9,
					strokeWidth:2,
					pointRadius:4,
					fillColor:"blue",
					fillOpacity:0.75
				},
				false
			),
			
						]);
	}


	if (type == "reciclatge"){
		//	dit maakt de layers voor de bugslaag
			map.addLayers([
			
						make_layer(
				QURL + "?data=node['recycling:paper'='yes'](bbox);out+skel;",
				name="#c#&nbspPaper",
				defaultPoint2("blue"),
				false
			),
			
						make_layer(
				QURL + "?data=node['recycling:glass_bottles'='yes'](bbox);out+skel;",
				name="#c#&nbspVidre",
				defaultPoint2("green"),
				false
			),
			
						make_layer(
				QURL + "?data=node['recycling:cans'='yes'](bbox);out+skel;",
				name="#c#&nbspEnvasos",
				defaultPoint2("yellow"),
				false
			),
			
						make_layer(
				QURL + "?data=node['recycling:organic'='yes'](bbox);out+skel;",
				name="#c#&nbspOrgànic",
				defaultPoint2("brown"),
				false
			),
			
						make_layer(
				QURL + "?data=node['recycling:waste'='yes'](bbox);out+skel;",
				name="#c#&nbspRebuig",
				defaultPoint2("black"),
				false
			),	
			
									make_layer(
				QURL + "?data=node['recycling:batteries'='yes'](bbox);out+skel;",
				name="#c#&nbspPiles",
				defaultPoint2("red"),
				false
			),	
			
												make_layer(
				QURL + "?data=node['recycling:cooking_oil'='yes'](bbox);out+skel;",
				name="#c#&nbspOli",
				defaultPoint2("slateblue"),
				false
			),
			

			
		/*	
		
			make_layer(QURL + "?data=(relation[route=bicycle](bbox);way[bicycle~'no|use_sidepath'](r);node(w););out+skel;", "#39ff00",name="#l#cycle routes & bicycle=no|use_sidepath",8, true,"5 10"),
	
			make_layer(QURL + "?data=(way[highway=cycleway][bicycle=no][moped!~'^yes|^designated'](bbox);node(w););out+skel;", "#ff00d5",name="#l#cycleway/bicycle=no<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbspNote: temporarily blocked ways?",10, true),
			
			make_layer(QURL + "?data=(way[cycleway][bicycle~'no|use_sidepath'][cycleway!=no](bbox);node(w);way['cycleway:right'][bicycle=no](bbox);node(w);way['cycleway:left'][bicycle=no](bbox);node(w););out+skel;", "purple",name="#l#cycleway lane, track,<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspopposite & bicycle=no|use_sidepath",8, true,"5 10"),
			
			make_layer(QURL + "?data=(way[highway=crossing](bbox);node(w););out+skel;", "red",name="#l#highway=crossing<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp(should be a node, not a way)",8, true),
			
			make_layer(QURL + "?data=(way[highway=road](bbox);node(w);way[highway=cycleway][fixme](bbox);node(w);way[highway=cycleway][FIXME](bbox);node(w);way[cycleway][fixme](bbox);node(w);way[cycleway][FIXME](bbox);node(w););out+skel;", "green",name="#l#highway=road or cycleway<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspfixme (better tagging needed)",8, true),
			
			make_layer(QURL + "?data=(way[highway~'Pad|pad|Rad|rad|unknown'](bbox);node(w););out+skel;", "#ff6520",name="#l#highway=nonsense",8, true,"5 10@0.5"),
			
			make_layer(QURL + "?data=(relation[route=bicycle](bbox););way(r:\"\")(bbox)->.b;(way.b[oneway=yes];)->.c;(way.c[\"oneway:bicycle\"=no];way.c[cycleway=opposite];way.c[oneway=\"-1\"];way.c[oneway=\"bicycle:backward\"];way.c[oneway=\"bicycle:forward\"];way.c[cycleway=\"opposite_lane\"];)->.d;(.c;- .d;);(._;>;);out+skel;","#17202a",name="#l#oneway cycle route without b/f role",8, true,"5 10"),
			
			// overbodige tags?
			make_layer(QURL + "?data=(way[highway=cycleway][cycleway][cycleway!=shared][cycleway!=segregated](bbox);node(w););out+skel;", "#39ffd5",name="#l#highway=cycleway & cycleway=*",8, false),
      
			make_layer(QURL + "?data=(way[highway=cycleway][bicycle~'yes|designated'](bbox);node(w););out+skel;", "blue",name="#l#cycleway &<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspbicycle=yes/designated<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp(needless tagging?)", 3, false,"5 10"),
			
			make_layer(QURL + "?data=(way[name~'^Fietspad|^fietspad|^pad$|^Pad$|cycleway|^path$|^Path$'](bbox);node(w);way[highway=cycleway][name!~'.'](bbox);node(w););out+skel;", "#ffff00",name="#l#cycleway/path without<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspstreetname (address search)",4, false),
*/
			]);
	}
	


}
	

function popuplinks(lonlat){

	  var thelink = "<div STYLE=\"margin:0px 0px 0px 0px;font-size: 8pt;\"><b>MAPA</b><br><a href=\"http://www.openstreetmap.org?lat=" + lonlat.lat + "&lon=" + lonlat.lon + "&zoom=17\" target=\"_blank\"><img src='img/osm.gif'>OSM</a>&nbsp&nbsp"
	  //COPIAR You can configure all services give you longitud and latitude and specific zoom in URL
	  //COPIAR thelink = thelink + "<a href=\"url" + lonlat.lat + "," + lonlat.lon + "zoomcode" target=\"_blank\"><img src='url icon'>Name of the service</a>&nbsp&nbsp";
	  //COPIAR Puedes configurar todo aquel servicio que te dé longitud (lonlat.lon) y latitud (lonla.lat) y un zoom concreto en la URL
	  //COPIAR thelink = thelink + "<a href=\"url" + lonlat.lat + "," + lonlat.lon + "codigozoom" target=\"_blank\"><img src='url icono'>Nombre del servicio</a>&nbsp&nbsp";
	  //COPIAR Pots configurar tots aquells serveis que et donin longitud i latitud i un zoom concre a l'adreça URL
	  //COPIAR thelink = thelink + "<a href=\"url" + lonlat.lat + "," + lonlat.lon + "codizoom" target=\"_blank\"><img src='url icona'>Nom del servei</a>&nbsp&nbsp";
	  thelink = thelink + "<a href=\"https://maps.google.es/maps?ll=" + lonlat.lat + "," + lonlat.lon + "&t=h&z=17\" target=\"_blank\"><img src='img/google.gif'>Google</a>&nbsp&nbsp";
	  thelink = thelink + "<a href=\"http://www.bing.com/maps/?v=2&cp=" + lonlat.lat + "~" + lonlat.lon + "&lvl=17&dir=0&sty=h&form=LMLTCC\" target=\"_blank\"><img src='img/bing.gif'>Bing</a><p>";
	  thelink = thelink + "<a href=\"https://wego.here.com/?map="  + (lonlat.lat) + "," + (lonlat.lon ) + "17,normal"  + "\" target=\"_blank\"><img src='img/here.png'>Here</a><hr>";
	  thelink = thelink + "<b>SATELITALES</b><br><a href=\"https://wego.here.com/?map="  + (lonlat.lat) + "," + (lonlat.lon ) + "17,satellite"  + "\" target=\"_blank\"><img src='img/digitalglobe.png'>DigitalGlobe</a>";
	  thelink = thelink + "<a href=\"https://www.google.es/maps/@" + lonlat.lat + "," + lonlat.lon + ",100m/data=!3m1!1e3\" target=\"_blank\"><img src='img/google.gif'>Google SAT</a><hr>&nbsp&nbsp";
	  thelink = thelink + "<b>A PIE DE CALLE</b><br><a href=\"https://www.mapillary.com/app/?lat="  + (lonlat.lat) + "&lng=" + (lonlat.lon ) + "&z=15"  + "\" target=\"_blank\"><img src='img/mapillary.png'>Mapillary</a>";
	  thelink = thelink + "<a href=\"https://openstreetcam.org/map/@"  + (lonlat.lat) + "," + (lonlat.lon ) + ",17z"  + "\" target=\"_blank\"><img src='img/openstreetcam.png'>OpenStreetCam</a><hr>";
	   thelink = thelink + "<b>RECORRIDOS</b><br><a href=\"http://www.openstreetmap.org?lat=" + lonlat.lat + "&lon=" + lonlat.lon + "&zoom=17&layers=CD\" target=\"_blank\"><img src='img/osm.gif'>OSM Cycle Map</a>"
	  thelink = thelink + "<a href=\"http://hiking.waymarkedtrails.org/nl/?zoom=13" +  "&lat=" + lonlat.lat + "&lon=" + lonlat.lon + "\" target=\"_blank\"><img src='img/map_hiking.png'>Waymarked trails</a> ";
	  thelink = thelink + "<a href=\"https://www.wikiloc.com/wikiloc/map.do?lt=" + lonlat.lat + "&ln=" + lonlat.lon + "&z=17" + "\" target=\"_blank\"><img src='img/wikiloc.png'>Wikiloc</a><hr>";
	  thelink = thelink + "<b>TRANSPORTE</b><br><a href=\"http://www.openstreetmap.org?lat=" + lonlat.lat + "&lon=" + lonlat.lon + "&zoom=17&layers=TB\" target=\"_blank\"><img src='img/osm.gif'>OSM Public Transport</a>"
	  thelink = thelink + "<a href=\"http://www.xn--pnvkarte-m4a.de/#" + lonlat.lon + ";" + lonlat.lat + ";15" + "\" target=\"_blank\"><img src='img/opvnkarte.png'>Opvnkarte</a><hr> ";
	  
	  
	
	  var area = 0.04
	  var ctop = lonlat.lat + area;
	  var cbottom = ctop - (2 * area);
	  var cleft = lonlat.lon - area;
	  var cright = cleft + (2 * area); 
	  
	  thelink = thelink + "<b>Editar :</b><br><a href=\"http://localhost:8111/load_and_zoom?top=" + ctop + "&bottom=" + cbottom + "&left=" + cleft + "&right=" + cright + "\" target=\"josm_frame\">JOSM (necesitas conector)</a><br>";
	  thelink = thelink + "<a href=\"http://www.openstreetmap.org/edit?editor=id&lat=" + lonlat.lat + "&lon=" + lonlat.lon + "&zoom=17\" target=\"_blank\">Editor iD</a><br>&nbsp&nbsp";
	  thelink = thelink + "<a href=\"http://www.openstreetmap.org/edit?editor=potlatch2&lat=" + lonlat.lat + "&lon=" + lonlat.lon + "&zoom=17\" target=\"_blank\">Potlatch 2</a><br>&nbsp&nbsp";	
	  thelink = thelink + "<a href=\"http://www.openstreetmap.org/edit?&lat=" + lonlat.lat + "&lon=" + lonlat.lon + "&zoom=17\" target=\"_blank\">Potlatch 1</a><hr>";
	  
	  thelink = thelink + "<b>Errores en OSM </b><br><a href=\"http://www.openstreetmap.org/#map=12" + "/" + lonlat.lat + "/" + lonlat.lon + "&layers=N" + "\" target=_blank> Notas en Openstreetmap</a><br \>";
	  thelink = thelink + "<a href=\"http://keepright.ipax.at/report_map.php?" + "&lat=" + lonlat.lat + "&lon=" + lonlat.lon + "&zoom=14&&layers=B0T&ch=0%2C50%2C191%2C195%2C201%2C205%2C206%2C311%2C312%2C313%2C402&show_ign=1&show_tmpign=1" + "\" target=_blank> Keepright</a><hr>"; 
	  thelink = thelink + "</b></div>";
	  return thelink;
	  
	}
