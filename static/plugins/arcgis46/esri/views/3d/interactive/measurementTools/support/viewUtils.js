// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define(["require","exports","dojo/_base/lang","../../../../../core/lang","../../../lib/glMatrix"],function(u,d,p,t,k){function l(a,c,b){var d=b._stage.getCamera();b.renderCoordsHelper.toRenderCoords(a,q);d.projectPoint(q,m);f.set2(m[0],b.height-m[1],c);return[c[0],b.height-c[1]]}Object.defineProperty(d,"__esModule",{value:!0});var f=k.vec2d,e=k.vec3d,n=k.mat4d,r=e.create();d.copyParameter=function(a,c){a=p.mixin({},a);c=t.clone(c);p.mixin(a,c);return a};d.scaleTranslateMatrix=function(a,c,b){n.identity(b);
n.translate(b,c);e.set3(a,a,a,r);n.scale(b,r)};d.midpoint=function(a,c){e.set3(0,0,0,c);for(var b=0;b<a.length;++b)e.add(c,a[b]);e.scale(c,1/a.length)};d.screenSpaceTangent=function(a,c,b,d){d.projectPoint(a,g);d.projectPoint(c,h);f.subtract(h,g,b);f.normalize(b)};d.projectPoint=l;d.pointToPointScreenDistance=function(a,c,b){l(a,g,b);l(c,h,b);return f.dist(g,h)};var q=e.create(),m=e.create(),g=f.create(),h=f.create()});