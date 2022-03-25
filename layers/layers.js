var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CollegesData_1 = new ol.format.GeoJSON();
var features_CollegesData_1 = format_CollegesData_1.readFeatures(json_CollegesData_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CollegesData_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CollegesData_1.addFeatures(features_CollegesData_1);
var lyr_CollegesData_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CollegesData_1, 
                style: style_CollegesData_1,
                interactive: true,
                title: '<img src="styles/legend/CollegesData_1.png" /> CollegesData'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_CollegesData_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_CollegesData_1];
lyr_CollegesData_1.set('fieldAliases', {'NIRF': 'NIRF', 'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Tour': 'Tour', 'Link': 'Link', });
lyr_CollegesData_1.set('fieldImages', {'NIRF': 'Range', 'Name': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'Tour': 'TextEdit', 'Link': 'TextEdit', });
lyr_CollegesData_1.set('fieldLabels', {'NIRF': 'inline label', 'Name': 'inline label', 'Tour': 'inline label', 'Link': 'inline label', });
lyr_CollegesData_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});