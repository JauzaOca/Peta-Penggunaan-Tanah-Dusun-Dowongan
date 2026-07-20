var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_BATASKECAMATAN_1 = new ol.format.GeoJSON();
var features_BATASKECAMATAN_1 = format_BATASKECAMATAN_1.readFeatures(json_BATASKECAMATAN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASKECAMATAN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASKECAMATAN_1.addFeatures(features_BATASKECAMATAN_1);
var lyr_BATASKECAMATAN_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATASKECAMATAN_1, 
                style: style_BATASKECAMATAN_1,
                popuplayertitle: 'BATAS KECAMATAN',
                interactive: true,
                title: '<img src="styles/legend/BATASKECAMATAN_1.png" /> BATAS KECAMATAN'
            });
var format_PENGGUNAANTANAHDUSUNDOWONGAN_2 = new ol.format.GeoJSON();
var features_PENGGUNAANTANAHDUSUNDOWONGAN_2 = format_PENGGUNAANTANAHDUSUNDOWONGAN_2.readFeatures(json_PENGGUNAANTANAHDUSUNDOWONGAN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PENGGUNAANTANAHDUSUNDOWONGAN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PENGGUNAANTANAHDUSUNDOWONGAN_2.addFeatures(features_PENGGUNAANTANAHDUSUNDOWONGAN_2);
var lyr_PENGGUNAANTANAHDUSUNDOWONGAN_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PENGGUNAANTANAHDUSUNDOWONGAN_2, 
                style: style_PENGGUNAANTANAHDUSUNDOWONGAN_2,
                popuplayertitle: 'PENGGUNAAN TANAH DUSUN DOWONGAN',
                interactive: true,
    title: 'PENGGUNAAN TANAH DUSUN DOWONGAN<br />\
    <img src="styles/legend/PENGGUNAANTANAHDUSUNDOWONGAN_2_0.png" /> Peternakan<br />\
    <img src="styles/legend/PENGGUNAANTANAHDUSUNDOWONGAN_2_1.png" /> Ekonomi/Jasa<br />\
    <img src="styles/legend/PENGGUNAANTANAHDUSUNDOWONGAN_2_2.png" /> Fasilitas Umum / Sosial<br />\
    <img src="styles/legend/PENGGUNAANTANAHDUSUNDOWONGAN_2_3.png" /> Padang<br />\
    <img src="styles/legend/PENGGUNAANTANAHDUSUNDOWONGAN_2_4.png" /> Pertanian<br />\
    <img src="styles/legend/PENGGUNAANTANAHDUSUNDOWONGAN_2_5.png" /> Tanah Terbuka<br />\
    <img src="styles/legend/PENGGUNAANTANAHDUSUNDOWONGAN_2_6.png" /> Perairan Darat<br />\
    <img src="styles/legend/PENGGUNAANTANAHDUSUNDOWONGAN_2_7.png" /> Permukiman<br />\
    <img src="styles/legend/PENGGUNAANTANAHDUSUNDOWONGAN_2_8.png" /> Instalasi<br />\
    <img src="styles/legend/PENGGUNAANTANAHDUSUNDOWONGAN_2_9.png" /> Industri<br />\
    <img src="styles/legend/PENGGUNAANTANAHDUSUNDOWONGAN_2_10.png" /> Lainnya<br />' });

lyr_GoogleHybrid_0.setVisible(true);lyr_BATASKECAMATAN_1.setVisible(true);lyr_PENGGUNAANTANAHDUSUNDOWONGAN_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_BATASKECAMATAN_1,lyr_PENGGUNAANTANAHDUSUNDOWONGAN_2];
lyr_BATASKECAMATAN_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', });
lyr_PENGGUNAANTANAHDUSUNDOWONGAN_2.set('fieldAliases', {'NUB': 'NUB', 'RT': 'RT', 'RW': 'RW', 'Penguasaan': 'Penguasaan', 'Pem_Tanah': 'Pem_Tanah', 'Pengg_Umum': 'Pengg_Umum', 'Indi_Terla': 'Indi_Terla', 'Pema_Detai': 'Pema_Detai', });
lyr_BATASKECAMATAN_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'LUAS': 'TextEdit', });
lyr_PENGGUNAANTANAHDUSUNDOWONGAN_2.set('fieldImages', {'NUB': 'TextEdit', 'RT': 'TextEdit', 'RW': 'TextEdit', 'Penguasaan': 'TextEdit', 'Pem_Tanah': 'TextEdit', 'Pengg_Umum': 'TextEdit', 'Indi_Terla': 'TextEdit', 'Pema_Detai': 'TextEdit', });
lyr_BATASKECAMATAN_1.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'LUAS': 'no label', });
lyr_PENGGUNAANTANAHDUSUNDOWONGAN_2.set('fieldLabels', {'NUB': 'no label', 'RT': 'no label', 'RW': 'no label', 'Penguasaan': 'no label', 'Pem_Tanah': 'no label', 'Pengg_Umum': 'no label', 'Indi_Terla': 'no label', 'Pema_Detai': 'no label', });
lyr_PENGGUNAANTANAHDUSUNDOWONGAN_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});