// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define(["require","exports","./IdGen"],function(h,k,b){return function(){function a(c,b,d,e,f,g){this.id=a._idGen.gen(c.getId());this.geometry=c;this.materials=b;this.transformation=d;this.instanceParameters=e;this.origin=f;this.customTransformation=g}a.prototype.getId=function(){return this.id};a.prototype.getStaticTransformation=function(){return this.transformation};a.prototype.getShaderTransformation=function(){return this.customTransformation?this.customTransformation(this.transformation):this.transformation};
a._idGen=new b;return a}()});