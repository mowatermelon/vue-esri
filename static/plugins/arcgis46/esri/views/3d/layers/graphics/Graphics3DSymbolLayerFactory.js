// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/Logger ./Graphics3DIconSymbolLayer ./Graphics3DObjectSymbolLayer ./Graphics3DLineSymbolLayer ./Graphics3DPathSymbolLayer ./Graphics3DFillSymbolLayer ./Graphics3DExtrudeSymbolLayer ./Graphics3DTextSymbolLayer".split(" "),function(q,a,b,c,f,g,h,k,l,m){Object.defineProperty(a,"__esModule",{value:!0});var n=b.getLogger("esri.views.3d.layers.graphics.Graphics3DSymbolLayerFactory");a.make=function(a,d,b,c){var e=p[d.type];return e?new e(a,d,b,c):(n.error("GraphicsLayerFactory#make",
"unknown symbol type "+d.type),null)};var p={icon:c,object:f,line:g,path:h,fill:k,extrude:l,text:m}});