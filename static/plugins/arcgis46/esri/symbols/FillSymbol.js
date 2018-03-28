// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define(["dojo/_base/lang","./Symbol","./SimpleLineSymbol"],function(c,a,b){return a.createSubclass({declaredClass:"esri.symbols.FillSymbol",properties:{outline:{type:b,json:{write:!0}},type:null},read:function d(a,b){return this.getInherited(d,arguments).call(this,c.mixin({outline:null},a),b)}})});