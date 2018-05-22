// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define(["require","exports","./WGLDisplayRecord","./util/serializationUtils"],function(g,h,f,c){return function(){function b(a){this.displayRecords=[];this.id=a}b.prototype.serialize=function(a){a.writeInt32(this.id);c.serializeList(a,this.displayRecords);return a};b.deserialize=function(a){var d=a.readInt32(),e=new b(d);e.displayRecords=c.deserializeList(a,f,{id:d});return e};return b}()});