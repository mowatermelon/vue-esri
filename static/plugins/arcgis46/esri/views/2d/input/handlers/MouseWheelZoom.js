// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler"],function(b,d,e,f){Object.defineProperty(d,"__esModule",{value:!0});b=function(b){function c(g,c){var a=b.call(this,!0)||this;a.view=g;a._canZoom=!0;a.registerIncoming("mouse-wheel",c,function(b){return a._handleMouseWheel(b)});return a}e(c,b);c.prototype._handleMouseWheel=function(b){var c=this;if(this._canZoom){var a=b.data;if(a=this.view.navigation.zoom(1/Math.pow(.6,1/60*a.deltaY),[a.x,a.y]))this._canZoom=
!1,a.always(function(){c._canZoom=!0});b.stopPropagation()}};return c}(f.InputHandler);d.MouseWheelZoom=b});