var wms_layers = [];

var lyr_Ortofotomapastandardowa_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mapy.geoportal.gov.pl/wss/service/PZGIK/ORTO/WMS/StandardResolution",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Raster",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Ortofotomapa standardowa',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortofotomapastandardowa_0, 0]);
var format_Obszarynaktrychkiedykolwiekpynarzeka_1 = new ol.format.GeoJSON();
var features_Obszarynaktrychkiedykolwiekpynarzeka_1 = format_Obszarynaktrychkiedykolwiekpynarzeka_1.readFeatures(json_Obszarynaktrychkiedykolwiekpynarzeka_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Obszarynaktrychkiedykolwiekpynarzeka_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Obszarynaktrychkiedykolwiekpynarzeka_1.addFeatures(features_Obszarynaktrychkiedykolwiekpynarzeka_1);
var lyr_Obszarynaktrychkiedykolwiekpynarzeka_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Obszarynaktrychkiedykolwiekpynarzeka_1, 
                style: style_Obszarynaktrychkiedykolwiekpynarzeka_1,
                popuplayertitle: 'Obszary, na których kiedykolwiek płynęła rzeka',
                interactive: true,
                title: '<img src="styles/legend/Obszarynaktrychkiedykolwiekpynarzeka_1.png" /> Obszary, na których kiedykolwiek płynęła rzeka'
            });
var format_Obszarynaktrychzawszepynarzeka_2 = new ol.format.GeoJSON();
var features_Obszarynaktrychzawszepynarzeka_2 = format_Obszarynaktrychzawszepynarzeka_2.readFeatures(json_Obszarynaktrychzawszepynarzeka_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Obszarynaktrychzawszepynarzeka_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Obszarynaktrychzawszepynarzeka_2.addFeatures(features_Obszarynaktrychzawszepynarzeka_2);
var lyr_Obszarynaktrychzawszepynarzeka_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Obszarynaktrychzawszepynarzeka_2, 
                style: style_Obszarynaktrychzawszepynarzeka_2,
                popuplayertitle: 'Obszary, na których zawsze płynęła rzeka',
                interactive: true,
                title: '<img src="styles/legend/Obszarynaktrychzawszepynarzeka_2.png" /> Obszary, na których zawsze płynęła rzeka'
            });
var format_Rniceprocentowychudziawrzekimidzy1990a2024r_3 = new ol.format.GeoJSON();
var features_Rniceprocentowychudziawrzekimidzy1990a2024r_3 = format_Rniceprocentowychudziawrzekimidzy1990a2024r_3.readFeatures(json_Rniceprocentowychudziawrzekimidzy1990a2024r_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rniceprocentowychudziawrzekimidzy1990a2024r_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rniceprocentowychudziawrzekimidzy1990a2024r_3.addFeatures(features_Rniceprocentowychudziawrzekimidzy1990a2024r_3);
var lyr_Rniceprocentowychudziawrzekimidzy1990a2024r_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rniceprocentowychudziawrzekimidzy1990a2024r_3, 
                style: style_Rniceprocentowychudziawrzekimidzy1990a2024r_3,
                popuplayertitle: 'Różnice procentowych udziałów rzeki między 1990 a 2024 r.',
                interactive: true,
    title: 'Różnice procentowych udziałów rzeki między 1990 a 2024 r.<br />\
    <img src="styles/legend/Rniceprocentowychudziawrzekimidzy1990a2024r_3_0.png" /> -85% - -60%<br />\
    <img src="styles/legend/Rniceprocentowychudziawrzekimidzy1990a2024r_3_1.png" /> -60% - -40%<br />\
    <img src="styles/legend/Rniceprocentowychudziawrzekimidzy1990a2024r_3_2.png" /> -40% - -20%<br />\
    <img src="styles/legend/Rniceprocentowychudziawrzekimidzy1990a2024r_3_3.png" /> -20% - 0%<br />\
    <img src="styles/legend/Rniceprocentowychudziawrzekimidzy1990a2024r_3_4.png" /> 0% - 20%<br />\
    <img src="styles/legend/Rniceprocentowychudziawrzekimidzy1990a2024r_3_5.png" /> 20% - 40%<br />'
        });
var format_Rniceprocentowychudziawrzekimidzy1940a1990r_4 = new ol.format.GeoJSON();
var features_Rniceprocentowychudziawrzekimidzy1940a1990r_4 = format_Rniceprocentowychudziawrzekimidzy1940a1990r_4.readFeatures(json_Rniceprocentowychudziawrzekimidzy1940a1990r_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rniceprocentowychudziawrzekimidzy1940a1990r_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rniceprocentowychudziawrzekimidzy1940a1990r_4.addFeatures(features_Rniceprocentowychudziawrzekimidzy1940a1990r_4);
var lyr_Rniceprocentowychudziawrzekimidzy1940a1990r_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rniceprocentowychudziawrzekimidzy1940a1990r_4, 
                style: style_Rniceprocentowychudziawrzekimidzy1940a1990r_4,
                popuplayertitle: 'Różnice procentowych udziałów rzeki między 1940 a 1990 r.',
                interactive: true,
    title: 'Różnice procentowych udziałów rzeki między 1940 a 1990 r.<br />\
    <img src="styles/legend/Rniceprocentowychudziawrzekimidzy1940a1990r_4_0.png" /> -100% - -60%<br />\
    <img src="styles/legend/Rniceprocentowychudziawrzekimidzy1940a1990r_4_1.png" /> -60% - -20%<br />\
    <img src="styles/legend/Rniceprocentowychudziawrzekimidzy1940a1990r_4_2.png" /> -20% - 0%<br />\
    <img src="styles/legend/Rniceprocentowychudziawrzekimidzy1940a1990r_4_3.png" /> 0% - 20%<br />\
    <img src="styles/legend/Rniceprocentowychudziawrzekimidzy1940a1990r_4_4.png" /> 20% - 60%<br />\
    <img src="styles/legend/Rniceprocentowychudziawrzekimidzy1940a1990r_4_5.png" /> 60% - 100%<br />'
        });
var format_Mapahistoryczna1940r_5 = new ol.format.GeoJSON();
var features_Mapahistoryczna1940r_5 = format_Mapahistoryczna1940r_5.readFeatures(json_Mapahistoryczna1940r_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mapahistoryczna1940r_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mapahistoryczna1940r_5.addFeatures(features_Mapahistoryczna1940r_5);
var lyr_Mapahistoryczna1940r_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mapahistoryczna1940r_5, 
                style: style_Mapahistoryczna1940r_5,
                popuplayertitle: 'Mapa historyczna - 1940 r.',
                interactive: true,
                title: '<img src="styles/legend/Mapahistoryczna1940r_5.png" /> Mapa historyczna - 1940 r.'
            });
var format_VMap1990r_6 = new ol.format.GeoJSON();
var features_VMap1990r_6 = format_VMap1990r_6.readFeatures(json_VMap1990r_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VMap1990r_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VMap1990r_6.addFeatures(features_VMap1990r_6);
var lyr_VMap1990r_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VMap1990r_6, 
                style: style_VMap1990r_6,
                popuplayertitle: 'VMap - 1990 r.',
                interactive: true,
                title: '<img src="styles/legend/VMap1990r_6.png" /> VMap - 1990 r.'
            });
var format_Sentinel2024r_7 = new ol.format.GeoJSON();
var features_Sentinel2024r_7 = format_Sentinel2024r_7.readFeatures(json_Sentinel2024r_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentinel2024r_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentinel2024r_7.addFeatures(features_Sentinel2024r_7);
var lyr_Sentinel2024r_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentinel2024r_7, 
                style: style_Sentinel2024r_7,
                popuplayertitle: 'Sentinel - 2024 r.',
                interactive: true,
                title: '<img src="styles/legend/Sentinel2024r_7.png" /> Sentinel - 2024 r.'
            });

lyr_Ortofotomapastandardowa_0.setVisible(true);lyr_Obszarynaktrychkiedykolwiekpynarzeka_1.setVisible(true);lyr_Obszarynaktrychzawszepynarzeka_2.setVisible(true);lyr_Rniceprocentowychudziawrzekimidzy1990a2024r_3.setVisible(true);lyr_Rniceprocentowychudziawrzekimidzy1940a1990r_4.setVisible(true);lyr_Mapahistoryczna1940r_5.setVisible(true);lyr_VMap1990r_6.setVisible(true);lyr_Sentinel2024r_7.setVisible(true);
var layersList = [lyr_Ortofotomapastandardowa_0,lyr_Obszarynaktrychkiedykolwiekpynarzeka_1,lyr_Obszarynaktrychzawszepynarzeka_2,lyr_Rniceprocentowychudziawrzekimidzy1990a2024r_3,lyr_Rniceprocentowychudziawrzekimidzy1940a1990r_4,lyr_Mapahistoryczna1940r_5,lyr_VMap1990r_6,lyr_Sentinel2024r_7];
lyr_Obszarynaktrychkiedykolwiekpynarzeka_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_BUG1940': 'FID_BUG1940', 'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'FID_BUG_scena_satelitarna': 'FID_BUG_scena_satelitarna', 'Id_1': 'Id', 'gridcode': 'gridcode', 'FID_HYDRO_WODY_POWIERZCHNIO_BUG_obszar_opracowania': 'FID_HYDRO_WODY_POWIERZCHNIO_BUG_obszar_opracowania', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID_12': 'ID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Obszarynaktrychzawszepynarzeka_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_BUG1940': 'FID_BUG1940', 'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'FID_HYDRO_WODY_POWIERZCHNIO_BUG_obszar_opracowania': 'FID_HYDRO_WODY_POWIERZCHNIO_BUG_obszar_opracowania', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID_1': 'ID', 'FID_BUG_scena_satelitarna': 'FID_BUG_scena_satelitarna', 'Id_12': 'Id', 'gridcode': 'gridcode', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Rniceprocentowychudziawrzekimidzy1990a2024r_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GRID_ID': 'GRID_ID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'PERCENTAGE_historyczna': 'PERCENTAGE_historyczna', 'PERCENTAGE_vmap': 'PERCENTAGE', 'PERCENTAGE_sentinel': 'PERCENTAGE', 'roznica_sentinel_vmap': 'roznica_sentinel_vmap', 'roznica_vmap_historyczna_licz': 'roznica_vmap_historyczna_licz', 'roznica_sentinel_vmap_liczb': 'roznica_sentinel_vmap_liczb', });
lyr_Rniceprocentowychudziawrzekimidzy1940a1990r_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GRID_ID': 'GRID_ID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'PERCENTAGE_historyczna': 'PERCENTAGE_historyczna', 'PERCENTAGE_vmap': 'PERCENTAGE', 'PERCENTAGE_sentinel': 'PERCENTAGE', 'roznica_sentinel_vmap': 'roznica_sentinel_vmap', 'roznica_vmap_historyczna_licz': 'roznica_vmap_historyczna_licz', 'roznica_sentinel_vmap_liczb': 'roznica_sentinel_vmap_liczb', });
lyr_Mapahistoryczna1940r_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_VMap1990r_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID': 'ID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Sentinel2024r_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Obszarynaktrychkiedykolwiekpynarzeka_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_BUG1940': 'Range', 'Id': 'Range', 'Shape_Leng': 'TextEdit', 'FID_BUG_scena_satelitarna': 'Range', 'Id_1': 'Range', 'gridcode': 'Range', 'FID_HYDRO_WODY_POWIERZCHNIO_BUG_obszar_opracowania': 'Range', 'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID_12': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Obszarynaktrychzawszepynarzeka_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_BUG1940': 'Range', 'Id': 'Range', 'Shape_Leng': 'TextEdit', 'FID_HYDRO_WODY_POWIERZCHNIO_BUG_obszar_opracowania': 'Range', 'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID_1': 'Range', 'FID_BUG_scena_satelitarna': 'Range', 'Id_12': 'Range', 'gridcode': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Rniceprocentowychudziawrzekimidzy1990a2024r_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'GRID_ID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'PERCENTAGE_historyczna': 'TextEdit', 'PERCENTAGE_vmap': 'TextEdit', 'PERCENTAGE_sentinel': 'TextEdit', 'roznica_sentinel_vmap': 'TextEdit', 'roznica_vmap_historyczna_licz': 'TextEdit', 'roznica_sentinel_vmap_liczb': 'TextEdit', });
lyr_Rniceprocentowychudziawrzekimidzy1940a1990r_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'GRID_ID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'PERCENTAGE_historyczna': 'TextEdit', 'PERCENTAGE_vmap': 'TextEdit', 'PERCENTAGE_sentinel': 'TextEdit', 'roznica_sentinel_vmap': 'TextEdit', 'roznica_vmap_historyczna_licz': 'TextEdit', 'roznica_sentinel_vmap_liczb': 'TextEdit', });
lyr_Mapahistoryczna1940r_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_VMap1990r_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Sentinel2024r_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'Range', 'gridcode': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Obszarynaktrychkiedykolwiekpynarzeka_1.set('fieldLabels', {'OBJECTID': 'no label', 'FID_BUG1940': 'no label', 'Id': 'no label', 'Shape_Leng': 'no label', 'FID_BUG_scena_satelitarna': 'no label', 'Id_1': 'no label', 'gridcode': 'no label', 'FID_HYDRO_WODY_POWIERZCHNIO_BUG_obszar_opracowania': 'no label', 'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID_12': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Obszarynaktrychzawszepynarzeka_2.set('fieldLabels', {'OBJECTID': 'no label', 'FID_BUG1940': 'no label', 'Id': 'no label', 'Shape_Leng': 'no label', 'FID_HYDRO_WODY_POWIERZCHNIO_BUG_obszar_opracowania': 'no label', 'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID_1': 'no label', 'FID_BUG_scena_satelitarna': 'no label', 'Id_12': 'no label', 'gridcode': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Rniceprocentowychudziawrzekimidzy1990a2024r_3.set('fieldLabels', {'OBJECTID': 'no label', 'GRID_ID': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'PERCENTAGE_historyczna': 'no label', 'PERCENTAGE_vmap': 'no label', 'PERCENTAGE_sentinel': 'no label', 'roznica_sentinel_vmap': 'no label', 'roznica_vmap_historyczna_licz': 'no label', 'roznica_sentinel_vmap_liczb': 'no label', });
lyr_Rniceprocentowychudziawrzekimidzy1940a1990r_4.set('fieldLabels', {'OBJECTID': 'no label', 'GRID_ID': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'PERCENTAGE_historyczna': 'no label', 'PERCENTAGE_vmap': 'no label', 'PERCENTAGE_sentinel': 'no label', 'roznica_sentinel_vmap': 'no label', 'roznica_vmap_historyczna_licz': 'no label', 'roznica_sentinel_vmap_liczb': 'no label', });
lyr_Mapahistoryczna1940r_5.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Shape_Leng': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_VMap1990r_6.set('fieldLabels', {'OBJECTID': 'no label', 'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Sentinel2024r_7.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Sentinel2024r_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});