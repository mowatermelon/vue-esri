// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/Logger","dojo/has"],function(d,a,c,e){Object.defineProperty(a,"__esModule",{value:!0});c.getLogger("esri.widgets.support.widgetUtils");a.join=function(){for(var b=[],a=0;a<arguments.length;a++)b[a]=arguments[a];return b.join(" ")};a.isRtl=function(){return"rtl"===document.dir};a.storeNode=function(a){this[a.getAttribute("data-node-ref")]=a}});