var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_perindukanvektor_2 = new ol.format.GeoJSON();
var features_perindukanvektor_2 = format_perindukanvektor_2.readFeatures(json_perindukanvektor_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_perindukanvektor_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_perindukanvektor_2.addFeatures(features_perindukanvektor_2);
var lyr_perindukanvektor_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_perindukanvektor_2, 
                style: style_perindukanvektor_2,
                popuplayertitle: "perindukan vektor",
                interactive: true,
                title: '<img src="styles/legend/perindukanvektor_2.png" /> perindukan vektor'
            });
var format_UTMPERINDUKANVEKTOR_3 = new ol.format.GeoJSON();
var features_UTMPERINDUKANVEKTOR_3 = format_UTMPERINDUKANVEKTOR_3.readFeatures(json_UTMPERINDUKANVEKTOR_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UTMPERINDUKANVEKTOR_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UTMPERINDUKANVEKTOR_3.addFeatures(features_UTMPERINDUKANVEKTOR_3);
var lyr_UTMPERINDUKANVEKTOR_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UTMPERINDUKANVEKTOR_3, 
                style: style_UTMPERINDUKANVEKTOR_3,
                popuplayertitle: "UTM PERINDUKAN VEKTOR",
                interactive: true,
                title: '<img src="styles/legend/UTMPERINDUKANVEKTOR_3.png" /> UTM PERINDUKAN VEKTOR'
            });
var format_bufer_4 = new ol.format.GeoJSON();
var features_bufer_4 = format_bufer_4.readFeatures(json_bufer_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bufer_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bufer_4.addFeatures(features_bufer_4);
var lyr_bufer_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bufer_4, 
                style: style_bufer_4,
                popuplayertitle: "bufer",
                interactive: true,
                title: '<img src="styles/legend/bufer_4.png" /> bufer'
            });
var format_Waypoints_5 = new ol.format.GeoJSON();
var features_Waypoints_5 = format_Waypoints_5.readFeatures(json_Waypoints_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Waypoints_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waypoints_5.addFeatures(features_Waypoints_5);
var lyr_Waypoints_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waypoints_5, 
                style: style_Waypoints_5,
                popuplayertitle: "Waypoints",
                interactive: true,
                title: 'Waypoints'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_perindukanvektor_2.setVisible(true);lyr_UTMPERINDUKANVEKTOR_3.setVisible(true);lyr_bufer_4.setVisible(true);lyr_Waypoints_5.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_GoogleMaps_1,lyr_perindukanvektor_2,lyr_UTMPERINDUKANVEKTOR_3,lyr_bufer_4,lyr_Waypoints_5];
lyr_perindukanvektor_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_UTMPERINDUKANVEKTOR_3.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_bufer_4.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Waypoints_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_perindukanvektor_2.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_UTMPERINDUKANVEKTOR_3.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_bufer_4.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Waypoints_5.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_perindukanvektor_2.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_UTMPERINDUKANVEKTOR_3.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_bufer_4.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Waypoints_5.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Waypoints_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});