// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define(["../request","./Layer","./support/TileInfo"],function(d,e,f){return e.createSubclass({properties:{attributionDataUrl:null,tileInfo:f},viewModulePaths:{"2d":"../views/2d/layers/TiledLayerView2D","3d":"../views/3d/layers/TileLayerView3D"},getTileUrl:function(a,b,d){},fetchTile:function(a,b,e,c){a=this.getTileUrl(a,b,e);b={responseType:"image",allowImageDataAccess:c&&c.allowImageDataAccess||!1};c&&c.timestamp&&(b.query={_ts:c.timestamp});return"string"===typeof a?d(a,b).then(function(a){return a.data}):
a.then(function(a){return d(a,{responseType:"image"})}).then(function(a){return a.data})}})});