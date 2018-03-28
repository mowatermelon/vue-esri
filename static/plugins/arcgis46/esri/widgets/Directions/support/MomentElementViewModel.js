// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/accessorSupport/decorators ../../../core/Accessor ../../../moment".split(" "),function(h,k,f,c,b,g,e){return function(d){function a(){var a=null!==d&&d.apply(this,arguments)||this;a.value=e();return a}f(a,d);a.prototype.castValue=function(a){return e(a)};c([b.property()],a.prototype,"state",void 0);c([b.property()],a.prototype,"value",void 0);c([b.cast("value")],a.prototype,"castValue",
null);return a=c([b.subclass("esri.widgets.Directions.MomentElementViewModel")],a)}(b.declared(g))});