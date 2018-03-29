// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("../core/Accessor ../core/Collection ../core/promiseUtils ./Layer ./mixins/ScaleRangeLayer ../Graphic dojo/_base/lang".split(" "),function(e,f,g,h,k,l,m){var n=e.createSubclass({properties:{layer:null,layerView:null,graphics:null}});return h.createSubclass([k],{declaredClass:"esri.layers.GraphicsLayer",viewModulePaths:{"2d":"../views/2d/layers/GraphicsLayerView2D","3d":"../views/3d/layers/FeatureLayerView3D"},getDefaults:function(a){return m.mixin(this.inherited(arguments),{graphics:[]})},
destroy:function(){this.removeAll()},_gfxHdl:null,properties:{elevationInfo:null,graphics:{type:f.ofType(l),set:function(a){var b=this._get("graphics");b||(a.forEach(function(a){a.layer=this},this),this._gfxHdl=a.on("change",function(a){var c,b,d;d=a.added;for(c=0;b=d[c];c++)b.layer=this;d=a.removed;for(c=0;b=d[c];c++)b.layer=null}.bind(this)),this._set("graphics",a),b=a);b.removeAll();b.addMany(a)}},screenSizePerspectiveEnabled:!0,type:{readOnly:!0,value:"graphics"}},add:function(a){this.graphics.add(a);
return this},addMany:function(a){this.graphics.addMany(a);return this},removeAll:function(){this.graphics.removeAll();return this},createGraphicsController:function(a){return g.resolve(new n({layer:this,layerView:a.layerView,graphics:this.graphics}))},remove:function(a){this.graphics.remove(a)},removeMany:function(a){this.graphics.removeMany(a)},graphicChanged:function(a){this.emit("graphic-update",a)}})});