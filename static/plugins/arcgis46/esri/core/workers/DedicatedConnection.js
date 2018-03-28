// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define(["require","exports","./workers"],function(e,f,d){return function(){function a(a,b,c){this.client=a;this.id=b;this._targetWorker={id:c}}Object.defineProperty(a.prototype,"workerId",{get:function(){return this._targetWorker.id},enumerable:!0,configurable:!0});a.prototype.invoke=function(a,b,c){return d.invoke(a,b,c,this._targetWorker,this.id)};a.prototype.close=function(){d.closeConnection(this)};return a}()});