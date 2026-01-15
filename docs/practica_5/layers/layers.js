var wms_layers = [];

var lyr_practica_5_mapa_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'practica_5_mapa<br />\
    <img src="styles/legend/practica_5_mapa_0_0.png" /> 1<br />\
    <img src="styles/legend/practica_5_mapa_0_1.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/practica_5_mapa_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-43736.263259, 4710807.339053, -25229.575236, 4729389.349886]
        })
    });

lyr_practica_5_mapa_0.setVisible(true);
var layersList = [lyr_practica_5_mapa_0];
