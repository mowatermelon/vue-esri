// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/accessorSupport/decorators ../../../core/Accessor ../../../core/Evented".split(" "),function(h,k,e,d,b,f,g){return function(c){function a(){return null!==c&&c.apply(this,arguments)||this}e(a,c);a.prototype.getCoordsFromScreenPoint=function(a){a=this.view.toMap(a);return[a.x,a.y]};d([b.property()],a.prototype,"view",void 0);return a=d([b.subclass("esri.views.2d.draw.DrawAction")],
a)}(b.declared(f,g))});