// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define(["require","exports","./MaterialUtil"],function(b,c,d){Object.defineProperty(c,"__esModule",{value:!0});b=function(){function a(a,b,c){this.id=d.__GLMaterial_id++;this.material=a}a.prototype.getId=function(){return this.id};a.prototype.getMaterialId=function(){return this.material.getId()};a.prototype.isVisible=function(){return this.material.isVisible()};a.prototype.isRenderOccluded=function(){return this.material.isRenderOccluded()};a.prototype.getRenderPriority=function(){return this.material.getRenderPriority()};
return a}();c.GLMaterialBase=b;c.default=b});