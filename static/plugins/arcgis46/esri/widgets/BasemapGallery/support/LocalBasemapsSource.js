// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/accessorSupport/decorators ../../../Basemap ../../../core/Accessor ../../../core/Collection".split(" "),function(l,m,f,c,b,g,h,k){var d=k.ofType(g);return function(e){function a(a){a=e.call(this)||this;a.basemaps=new d;a.state="ready";return a}f(a,e);a.prototype.refresh=function(){};c([b.property({type:d})],a.prototype,"basemaps",void 0);c([b.property({readOnly:!0})],a.prototype,
"state",void 0);return a=c([b.subclass("esri.widgets.BasemapGallery.support.LocalBasemapsSource")],a)}(b.declared(h))});