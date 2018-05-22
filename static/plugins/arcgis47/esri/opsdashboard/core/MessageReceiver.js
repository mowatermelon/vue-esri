// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/extendsHelper ../../core/tsSupport/decorateHelper dojo/_base/lang ../../core/Evented ../../core/typescript ./messageHandler".split(" "),function(l,m,c,d,e,f,g,h){return function(b){function a(){return null!==b&&b.apply(this,arguments)||this}c(a,b);a.prototype.dojoConstructor=function(a){var k=this;this._setConfig(a);h.on("message-received",function(a){k.__messageReceived(a)})};a.prototype._setConfig=function(a){a&&e.mixin(this,a)};a.prototype.__messageReceived=
function(a){this._messageReceived(a)};a.prototype._messageReceived=function(a){};return a=d([g.subclass()],a)}(f)});