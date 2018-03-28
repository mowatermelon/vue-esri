// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../portal/support/geometryServiceUtils","../../../../core/promiseUtils","../../../../geometry/support/webMercatorUtils"],function(h,d,g,e,f){Object.defineProperty(d,"__esModule",{value:!0});d.toView=function(a){var b=a.view.spatialReference,c=a.layer.fullExtent&&a.layer.fullExtent.spatialReference;return!c||c.equals(b)||"local"!==a.view.viewingMode?e.resolve(null):f.canProject(c,b)?e.resolve(f.project(a.layer.fullExtent,b)):g.projectGeometry(a.layer.fullExtent,
b,a.layer.portalItem).then(function(b){if(!a.destroyed&&b)return b}).otherwise(function(){return null})}});