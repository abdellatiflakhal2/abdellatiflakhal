var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'مطارات المغرب',
                interactive: false,
                title: '<img src="styles/legend/_1.png" /> مطارات المغرب'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr__1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr__1];
lyr__1.set('fieldAliases', {'id': 'id', 'ident': 'ident', 'type': 'type', 'name': 'name', 'latitude_d': 'latitude_d', 'longitude_': 'longitude_', });
lyr__1.set('fieldImages', {'id': 'TextEdit', 'ident': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'latitude_d': 'TextEdit', 'longitude_': 'TextEdit', });
lyr__1.set('fieldLabels', {'id': 'no label', 'ident': 'no label', 'type': 'no label', 'name': 'no label', 'latitude_d': 'no label', 'longitude_': 'no label', });
lyr__1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});